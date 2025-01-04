import { useQuery } from '@tanstack/react-query';
import { podcastsLoadQuery } from './podcasts-load-query';
import { IPodcast } from '@models';
import { useSetPodcastsSelector } from '@store';

export const usePodcastsLoad = () => {
  const setPodcastsSelector = useSetPodcastsSelector();
  const {data, error, isFetching, isSuccess} = useQuery<IPodcast[], Error, IPodcast[]>({
    queryKey: ['podcasts-grid-load'],
    queryFn: async () => {
      const response = await podcastsLoadQuery();
      setPodcastsSelector(response);
      return response;
    },
    staleTime: 24*60*60*1000,
    gcTime: 25*60*60*1000
  });

  return {
    data,
    error,
    isFetching,
    isSuccess
  };
};
