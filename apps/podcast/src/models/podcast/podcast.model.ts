
export type TAttributesTypes = 'href' | 'height' | 'id' | string;

export type TAttributes = Record<TAttributesTypes, string>;

export interface IEntries {
  attributes?: TAttributes;
  label: string;
}

export interface IPodcast {
  artist: IEntries;
  id: IEntries;
  image: IEntries[];
  name: IEntries;
}
