import { useQuery } from '@tanstack/react-query';
import { podcastDetailQuery } from './podcast-details-query';

export const usePodcastDetails = (podcastId:string | number) => {
  const {data, error, isFetching} = useQuery({
    queryKey: ['podcasts-grid-load'],
    queryFn: () => podcastDetailQuery(podcastId)
  });

  return {
    data,
    error,
    isFetching
  };
};
