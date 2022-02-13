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
  draft = 'draft',
  paused = 'paused',
  online = 'online',
  stopped = 'stopped',
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
  [TestStatus.online]: 1,
  [TestStatus.paused]: 2,
  [TestStatus.stopped]: 3,
  [TestStatus.draft]: 4,
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
