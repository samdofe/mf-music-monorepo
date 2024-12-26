import { useQuery } from '@tanstack/react-query';
import { podcastsLoadQuery } from './podcasts-load-query';
import { IPodcast } from '@models';

export const usePodcastsLoad = () => {
  const {data, error, isFetching} = useQuery<IPodcast[], Error, IPodcast[]>({
    queryKey: ['podcasts-load'],
    queryFn: () => podcastsLoadQuery()
  });

  return {
    data,
    error,
    isFetching
  };
};
