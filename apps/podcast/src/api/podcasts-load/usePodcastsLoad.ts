import { useQuery } from '@tanstack/react-query';
import { podcastsLoadQuery } from './podcasts-load-query';
import { IPodcast } from '@models';
import { usePodcastStore } from '@store';

export const usePodcastsLoad = () => {
  const [podcastStore, setPodcastStore] = usePodcastStore();
  const {data, error, isFetching} = useQuery<IPodcast[], Error, IPodcast[]>({
    queryKey: ['podcasts-grid-load'],
    queryFn: async () => {
      const response = await podcastsLoadQuery();
      setPodcastStore({
        ...podcastStore,
        podcasts: response
      });

      return response;
    },
    staleTime: 24*60*60*1000,
    gcTime: 25*60*60*1000
  });

  return {
    data,
    error,
    isFetching
  };
};
