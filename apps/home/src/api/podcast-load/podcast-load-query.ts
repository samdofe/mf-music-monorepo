import { api } from '@inditex/api';
const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_LOAD_API_CONTEXT} = import.meta.env;

export const podcastLoadQuery = async ()=> {
  const response = await api.get(`
    ${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_LOAD_API_CONTEXT}/limit=100/genre=1310/json
  `, true);

  if (!response.ok) {
    throw new Error("Error fetching podcasts from Itunes");
  }

  const {contents} = await response.json();
  return JSON.parse(contents);
}
