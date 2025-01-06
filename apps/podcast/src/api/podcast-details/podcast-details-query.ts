import {api} from '@inditex/api';
const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_DETAILS_API_CONTEXT} = import.meta.env;

export const podcastDetailQuery = async (podcastId: string | number) => {
  const response = await api.get(
    `
    ${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_DETAILS_API_CONTEXT}?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    true
  );

  if (!response.ok) {
    throw new Error('Error fetching podcasts-grid from Itunes');
  }

  const {contents} = await response.json();
  const {results} = JSON.parse(contents);
  results.shift();
  return {
    resultCount: results.length,
    episodes: results
  };
};
