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
  Draft = 'draft',
  Paused = 'paused',
  Online = 'online',
  Stopped = 'stopped',
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
  [TestStatus.Online]: 1,
  [TestStatus.Paused]: 2,
  [TestStatus.Stopped]: 3,
  [TestStatus.Draft]: 4,
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
