import { api } from '@inditex/api';
const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_DETAILS_API_CONTEXT} = import.meta.env;

export const podcastDetailQuery = async (podcastId: string | number)=> {
  const response = await api.get(`
    ${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_DETAILS_API_CONTEXT}?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20
  `, true);

  if (!response.ok) {
    throw new Error('Error fetching podcasts-grid from Itunes');
  }

  const text = await response.text();
  return JSON.parse(text);
}
