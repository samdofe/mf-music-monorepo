import { useQuery } from '@tanstack/react-query';
import { podcastLoadQuery } from './podcast-load-query';

export const usePodcastLoad = () => {
  const {data, error, isFetching} = useQuery({
    queryKey: ['podcast-load'],
    queryFn: () => podcastLoadQuery()
  });

  return {
    data,
    error,
    isFetching
  };
};
