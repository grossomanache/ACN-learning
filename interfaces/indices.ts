import type { BaseHit, Hit } from "instantsearch.js";
interface Localization {
  [key: string]: string;
}
export interface BookIndex {
  objectID: string;
  status: string;
  title: string;
  rating: Number;
  slug: string;
}

export interface HitProps extends BaseHit {
  hit: BookIndex;
}
