export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\/+/, '');
  return `${base}${clean}`.replace(/([^:]\/)\/+/g, '$1');
}

export function opportunityUrl(id: string): string {
  return withBase(`opportunity/${id}/`);
}

export function repositoryUrl(): string {
  return import.meta.env.PUBLIC_REPOSITORY_URL || 'https://github.com/USERNAME/geo-deadlines';
}
