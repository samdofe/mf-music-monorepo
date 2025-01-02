import { useQuery } from '@tanstack/react-query';
import { podcastDetailQuery } from './podcast-details-query';

import { IEpisodesList } from '@models';
import { useSetEpisodesListSelector } from '@store';

export const usePodcastDetails = (podcastId:string | number) => {
  const setEpisodesListSelector = useSetEpisodesListSelector();
  const {data, error, isFetching} = useQuery<IEpisodesList, Error, IEpisodesList>({
    queryKey: ['podcast-details-load'],
    queryFn: async () => {
     const response = await podcastDetailQuery(podcastId);
     setEpisodesListSelector(response);
     return response;
    }
  });

  return {
    data,
    error,
    isFetching
  };
};
