interface Localization {
  [key: string]: string;
}

export interface BookIndex {
  objectID: string;
  fields: { status: { [key: string]: string } };
}
