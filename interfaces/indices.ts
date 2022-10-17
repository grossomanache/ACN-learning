interface Localization {
  [key: string]: string;
}

export interface BookIndex {
  hit: { objectID: string; fields: { status: { [key: string]: string } } };
}
