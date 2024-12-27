import { api } from '@inditex/api';
import { IPodcast } from '@models';
const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_LOAD_API_CONTEXT} = import.meta.env;

export const podcastsLoadQuery = async (): Promise<IPodcast[]>=> {
  const response = await api.get(`
    ${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_LOAD_API_CONTEXT}/limit=100/genre=1310/json
  `, true);

  if (!response.ok) {
    throw new Error('Error fetching podcasts-grid from Itunes');
  }

  const {contents} = await response.json();
  const { entry } = JSON.parse(contents.replaceAll("im:", "")).feed;
  return entry.map(({artist, image, name, id, summary}: IPodcast) => ({artist, image, name, id, summary}));
}
