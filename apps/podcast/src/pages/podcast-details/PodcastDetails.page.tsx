import React, {useEffect} from 'react';
import {
  useGetEpisodesListSelector,
  useGetPodcastsSelector,
  useSetSelectedPodcastSelector
} from '@store';
import styles from './PodcastDetails.page.module.scss';
import {CdkCard} from '@inditex/cdk';
import DOMPurify from 'dompurify';
import {useParams} from 'react-router-dom';
import {usePodcastDetails} from '../../api/podcast-details/usePodcastDetails';
import {ThreeDotsScaleIcon} from '@inditex/icons';

export const PodcastDetailsPage = () => {
  const {podcastId} = useParams();
  const {isFetching} = usePodcastDetails(podcastId ?? '');
  const podcasts = useGetPodcastsSelector();
  const episodesList = useGetEpisodesListSelector();
  const setSelectedPodcastSelector= useSetSelectedPodcastSelector();
  const selectedPodcast = podcasts.filter(({id}) => id.attributes?.id === podcastId)[0];
  useEffect(() => {
    setSelectedPodcastSelector(selectedPodcast);
  }, []);
  const {artist, summary, name, image} = selectedPodcast;
  const sanitizeSummary = summary.label.replace(/\n/g, '<br>');
  console.log(podcasts);
  console.log(podcastId);

  return isFetching ? (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ThreeDotsScaleIcon />
    </div>
  ) : (
    <div className={styles['podcast-details']}>
      <div className={styles['podcast-details__card']}>
        <CdkCard
          title={name.label}
          subTitle={artist.label}
          imageUrl={image[2].label}
          description={DOMPurify.sanitize(sanitizeSummary)}
        />
      </div>
      <div className={styles['podcast-details__episodes']}>
        <h2>{episodesList?.resultCount}</h2>
        {episodesList?.episodes.map((episode) => (
          <div>
            <p>{episode.description}</p>
            <p>{episode.trackId}</p>
            <p>{episode.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
