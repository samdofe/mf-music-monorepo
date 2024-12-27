import { IPodcast } from '@models';

export const useFilteredData = ({podcasts, searchQuery}: {podcasts: IPodcast[], searchQuery: string})=>{
  return podcasts?.filter((podcast) => {
    const matchesName = podcast.name.label.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAuthor = podcast.artist.label.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesName || matchesAuthor;
  });
}
