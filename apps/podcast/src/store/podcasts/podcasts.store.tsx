import { createContext, PropsWithChildren, ReactElement, useState } from 'react';
import { IPodcastStore, TPodcastContextType } from '@models';

export const DEFAULT_PODCAST_STATE: IPodcastStore = {
  podcasts : [{
    artist: {
      label: 'DEFAULT_PODCAST_ARTIST',
      attributes: {
        href: ''
      }
    },
    id: {
      label: 'DEFAULT_PODCAST_ID',
      attributes: {
        id: '0'
      }
    },
    image: [{
      label: 'DEFAULT_PODCAST_IMAGE',
      attributes: {
        height: ''
      }
    }],
    name: {
      label: 'DEFAULT_PODCAST_NAME'
    },
    summary: {
      label: 'DEFAULT_PODCAST_SUMMARY'
    }
  }],
  selectedPodcast: {
    artist: {
      label: 'DEFAULT_SELECTED_PODCAST_ARTIST',
      attributes: {
        href: ''
      }
    },
    id: {
      label: 'DEFAULT_SELECTED_PODCAST_ID',
      attributes: {
        id: '0'
      }
    },
    image: [{
      label: 'DEFAULT_SELECTED_PODCAST_IMAGE',
      attributes: {
        height: ''
      }
    }],
    name: {
      label: 'DEFAULT_SELECTED_PODCAST_NAME'
    },
    summary: {
      label: 'DEFAULT_SELECTED_PODCAST_SUMMARY'
    }
  },
  episodesList: {
    resultCount: 1,
    episodes: [
      {
        description: '',
        episodeUrl: '',
        releaseDate: '2024-12-24T10:00:00Z',
        trackId: 100089,
        trackName: '',
        TrackTimeMillis: 3765000
      }
    ]
  }
};



export const PodcastContext = createContext<TPodcastContextType | null>(null);

export const PodcastStoreProvider = ({children}: PropsWithChildren): ReactElement=> {
  return (
  <PodcastContext.Provider value={useState(DEFAULT_PODCAST_STATE)}>
    {children}
  </PodcastContext.Provider>
  );
}
