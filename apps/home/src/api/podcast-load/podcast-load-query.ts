import { api } from '@inditex/api';
const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_LOAD_API_CONTEXT} = import.meta.env;

type TAttributesTypes = 'href' | 'height' | string;

type TAttributes = Record<TAttributesTypes, string>;

interface IEntries {
  attributes?: TAttributes;
  label: string;
}

interface IItunesPodcastEntry {
  'im:artist': IEntries;
  'im:image': IEntries[];
  'im:name': IEntries;
}

interface IIPodcastLoadQueryResponse {
  artist: IEntries;
  image: IEntries[];
  name: IEntries;
}

export const podcastLoadQuery = async (): Promise<IIPodcastLoadQueryResponse[]>=> {
  const response = await api.get(`
    ${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_LOAD_API_CONTEXT}/limit=100/genre=1310/json
  `, true);

  if (!response.ok) {
    throw new Error('Error fetching podcasts from Itunes');
  }

  const {contents} = await response.json();
  const { entry } = JSON.parse(contents).feed;
  return entry.map(({'im:artist': artist, 'im:image':image, 'im:name':name}: IItunesPodcastEntry) => ({artist, image, name}));
}
