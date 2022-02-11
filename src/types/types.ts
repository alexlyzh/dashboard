export type Site = {
  id: number,
  url: string,
}

export type Test = {
  id: number,
  name: string,
  type: string,
  status: string,
  siteId: number,
}
