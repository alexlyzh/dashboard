export const appPath = <const>{
  root: '/',
  finalize: '/finalize/:id',
  results: '/results/:id',
};

export enum ApiPath {
  sites = '/sites',
  tests = '/tests',
}

export enum TestStatus {
  DRAFT = 'DRAFT',
  PAUSED = 'PAUSED',
  ONLINE = 'ONLINE',
  STOPPED = 'STOPPED',
}

export enum SortType {
  NameAsc = 'NameAsc',
  NameDesc = 'NameDesc',
  TypeAsc = 'TypeAsc',
  TypeDesc = 'TypeDesc',
  StatusAsc = 'StatusAsc',
  StatusDesc = 'StatusDesc',
  SiteAsc = 'SiteAsc',
  SiteDesc = 'SiteDesc',
}

export const StatusPriority = <const>{
  [TestStatus.ONLINE]: 1,
  [TestStatus.PAUSED]: 2,
  [TestStatus.STOPPED]: 3,
  [TestStatus.DRAFT]: 4,
};

export const colorMap = <const>{
  online: '#1BDA9D',
  paused: '#FF8346',
  stopped: '#FE4848',
};

export const typeMap = <const>{
  classic: 'Classic',
  mvt: 'MVT',
  'server_side': 'Server-side',
};
