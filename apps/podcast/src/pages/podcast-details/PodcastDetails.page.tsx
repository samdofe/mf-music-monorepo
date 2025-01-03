import React, {useEffect} from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { CdkCard } from '@inditex/cdk';
import {ThreeDotsScaleIcon} from '@inditex/icons';
import {usePodcastDetails} from '@api';
import {
  useGetPodcastsSelector,
  useSetSelectedPodcastSelector
} from '@store';
import styles from './PodcastDetails.page.module.scss';

export const PodcastDetailsPage = () => {
  const {podcastId} = useParams();
  const navigate = useNavigate();
  const {isFetching} = usePodcastDetails(podcastId ?? '');
  const podcasts = useGetPodcastsSelector();
  const setSelectedPodcastSelector= useSetSelectedPodcastSelector();
  const selectedPodcast = podcasts.filter(({id}) => id.attributes?.id === podcastId)[0];
  const {artist, summary, name, image} = selectedPodcast;
  const sanitizeSummary = summary.label.replace(/\n/g, '<br>');

  useEffect(() => {
    setSelectedPodcastSelector(selectedPodcast);
  }, []);

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
          onClickHandler={() => {navigate(`/podcast/${podcastId}`)}}
        />
      </div>
      <div className={styles['podcast-details__episodes']}>
        <Outlet />
      </div>
    </div>
  );
};

export default PodcastDetailsPage
