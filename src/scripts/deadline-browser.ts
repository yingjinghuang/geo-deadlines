interface FilterState {
  type: string;
  time: string;
  scope: string;
  topics: string[];
  sort: string;
  year: string;
  journal: string;
}

export {};

const STORAGE_KEY = 'geodeadlines:filters';
const FAVORITES_KEY = 'geodeadlines:favorites';

function loadState(fixedType: string, defaultSort: string): FilterState {
  const fallback = { type: fixedType || 'all', time: 'all', scope: 'all', topics: [], sort: defaultSort, year: 'all', journal: 'all' };
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Partial<FilterState>;
    return { ...fallback, ...stored, type: fixedType || stored.type || 'all', sort: stored.sort || defaultSort };
  } catch { return fallback; }
}

document.querySelectorAll<HTMLElement>('[data-deadline-browser]').forEach((browser) => {
  const fixedType = browser.dataset.fixedType ?? '';
  const mode = browser.dataset.mode ?? 'upcoming';
  const defaultSort = mode === 'archive' ? 'latest' : 'soonest';
  const state = loadState(fixedType, defaultSort);
  if (mode === 'archive') state.time = 'all';
  const cards = [...browser.querySelectorAll<HTMLElement>('[data-opportunity-card]')];
  const list = browser.querySelector<HTMLElement>('[data-card-list]');
  const search = document.querySelector<HTMLInputElement>('[data-search-input]');
  const sort = browser.querySelector<HTMLSelectElement>('[data-sort-select]');
  const year = document.querySelector<HTMLSelectElement>('[data-filter-year]');
  const journal = document.querySelector<HTMLSelectElement>('[data-filter-journal]');
  if (sort) sort.value = state.sort;
  if (year) {
    if (![...year.options].some((option) => option.value === state.year)) state.year = 'all';
    year.value = state.year;
  }
  if (journal) {
    if (![...journal.options].some((option) => option.value === state.journal)) state.journal = 'all';
    journal.value = state.journal;
  }

  function renderControls() {
    document.querySelectorAll<HTMLButtonElement>('[data-filter-type]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filterType === state.type)));
    document.querySelectorAll<HTMLButtonElement>('[data-filter-time]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filterTime === state.time)));
    document.querySelectorAll<HTMLButtonElement>('[data-filter-scope]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filterScope === state.scope)));
    document.querySelectorAll<HTMLButtonElement>('[data-filter-topic]').forEach((button) => button.setAttribute('aria-pressed', String(state.topics.includes(button.dataset.filterTopic ?? ''))));
  }

  function apply() {
    const query = (search?.value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const now = Date.now();
    let favorites = new Set<string>();
    try { favorites = new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]') as string[]); } catch { /* empty */ }
    let visible = 0;
    cards.forEach((card) => {
      const deadline = Number(card.dataset.deadline || 0);
      const topics = (card.dataset.topics ?? '').split(' ');
      const withinWindow = state.time === 'all' || (deadline > now && deadline - now <= Number(state.time) * 86_400_000);
      const match = (state.type === 'all' || card.dataset.type === state.type)
        && (state.scope === 'all' || card.dataset.scope === state.scope)
        && (!state.topics.length || state.topics.every((topic) => topics.includes(topic)))
        && (!query || (card.dataset.search ?? '').includes(query))
        && (!year || state.year === 'all' || card.dataset.year === state.year)
        && (!journal || state.journal === 'all' || card.dataset.journal === state.journal)
        && withinWindow
        && (mode !== 'favorites' || favorites.has(card.dataset.id ?? ''));
      card.hidden = !match;
      if (match) visible += 1;
    });
    const count = browser.querySelector('[data-result-count]');
    if (count) count.textContent = String(visible);
    const empty = browser.querySelector<HTMLElement>('[data-empty-state]');
    if (empty) empty.hidden = visible !== 0;
    sortCards();
  }

  function sortCards() {
    if (!list) return;
    const mode = sort?.value ?? state.sort;
    state.sort = mode;
    const sorted = [...cards].sort((a, b) => {
      if (mode === 'title') return (a.dataset.title ?? '').localeCompare(b.dataset.title ?? '');
      if (mode === 'verified') return Number(b.dataset.verified ?? 0) - Number(a.dataset.verified ?? 0);
      const left = Number(a.dataset.deadline || (mode === 'latest' ? 0 : Number.MAX_SAFE_INTEGER));
      const right = Number(b.dataset.deadline || (mode === 'latest' ? 0 : Number.MAX_SAFE_INTEGER));
      return mode === 'latest' ? right - left : left - right;
    });
    sorted.forEach((card) => list.append(card));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const type = target.closest<HTMLButtonElement>('[data-filter-type]');
    const time = target.closest<HTMLButtonElement>('[data-filter-time]');
    const scope = target.closest<HTMLButtonElement>('[data-filter-scope]');
    const topic = target.closest<HTMLButtonElement>('[data-filter-topic]');
    if (type) state.type = type.dataset.filterType ?? 'all';
    else if (time) state.time = time.dataset.filterTime ?? 'all';
    else if (scope) state.scope = scope.dataset.filterScope ?? 'all';
    else if (topic) {
      const value = topic.dataset.filterTopic ?? '';
      state.topics = state.topics.includes(value) ? state.topics.filter((item) => item !== value) : [...state.topics, value];
    } else return;
    renderControls(); apply();
  });
  search?.addEventListener('input', apply);
  sort?.addEventListener('change', apply);
  year?.addEventListener('change', () => { state.year = year.value; apply(); });
  journal?.addEventListener('change', () => { state.journal = journal.value; apply(); });
  window.addEventListener('geodeadlines:favoriteschange', apply);
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') { event.preventDefault(); search?.focus(); }
  });
  renderControls(); apply();
});
