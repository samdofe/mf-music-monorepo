import { Dispatch, SetStateAction } from 'react';

export type TAttributesTypes = 'href' | 'height' | 'id' | string;

export type TAttributes = Record<TAttributesTypes, string>;

export interface IEntry {
  attributes?: TAttributes;
  label: string;
}

export interface IPodcast {
  artist: IEntry;
  id: IEntry;
  image: IEntry[];
  name: IEntry;
  summary: IEntry;
}

export interface IEpisode {
  description: string;
  episodeUrl: string;
  releaseDate: string;
  trackId: number;
  trackName: string;
  TrackTimeMillis: number;
}

export interface IEpisodesList {
  resultCount: number,
  episodes: IEpisode[]
}

export interface IPodcastStore {
  podcasts: IPodcast[];
  selectedPodcast?: IPodcast;
  episodesList?: IEpisodesList;
}

export type TPodcastContextType = [IPodcastStore, Dispatch<SetStateAction<IPodcastStore>>];
