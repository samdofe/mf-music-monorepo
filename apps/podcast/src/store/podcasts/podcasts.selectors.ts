import { useContext } from 'react';
import { IEpisodesList, IPodcast } from '@models';
import { PodcastContext } from './podcasts.store';

export const usePodcastStore=()=>{
  const context = useContext(PodcastContext);
  if(!context){
    throw new Error(' usePodcastStore must be used within a PodcastStoreProvider');
  }

  return context;
}

export const useGetPodcastsSelector = ()=> {
  const [podcastStore] = usePodcastStore();
  return podcastStore.podcasts;
}

export const useGetSelectedPodcastSelector = ()=> {
  const [podcastStore] = usePodcastStore();
  return podcastStore.selectedPodcast;
}

export const useGetEpisodesListSelector = ()=> {
  const [podcastStore] = usePodcastStore();
  return podcastStore.episodesList;
}

export const useSetPodcastsSelector = ()=>{
  const [ podcastsStore , setPodcastStore] = usePodcastStore();
  return (podcasts: IPodcast[]) =>
  setPodcastStore({
    ...podcastsStore,
    podcasts
  });
}

export const useSetSelectedPodcastSelector = ()=>{
  const [ podcastStore , setPodcastStore] = usePodcastStore();

  return (selectedPodcast: IPodcast)=> setPodcastStore({
    ...podcastStore,
    selectedPodcast
  });

}

export const useSetEpisodesListSelector = ()=>{
  const [ podcastStore , setPodcastStore] = usePodcastStore();
  return (episodesList: IEpisodesList)=>
  setPodcastStore({
    ...podcastStore,
    episodesList
  });
}


