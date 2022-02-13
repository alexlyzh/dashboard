export enum AppPath {
  root = '/',
  finalize = '/finalize/:id',
  results = '/results/:id',
}

export enum ApiPath {
  sites = '/sites',
  tests = '/tests',
  site = '/sites/:id',
  test = '/tests/:id',
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

export enum KeyboardKey {
  ESC = 'Escape',
}

export const StatusPriority = <const>{
  [TestStatus.ONLINE]: 1,
  [TestStatus.PAUSED]: 2,
  [TestStatus.STOPPED]: 3,
  [TestStatus.DRAFT]: 4,
};

export const color = <const>{
  online: '#1BDA9D',
  paused: '#FF8346',
  stopped: '#FE4848',
};

export const testType = <const>{
  classic: 'Classic',
  mvt: 'MVT',
  'server_side': 'Server-side',
};

export const redirectBtnName = <const>{
  results: 'Results',
  finalize: 'Finalize',
};
