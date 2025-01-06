import React, {useEffect} from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { CdkCard } from '@inditex/cdk';
import {usePodcastDetails} from '@api';
import {
  useGetPodcastsSelector,
  useSetSelectedPodcastSelector
} from '@store';
import { Loader, NoResults } from '@ui';
import styles from './PodcastDetails.page.module.scss';

export const PodcastDetailsPage = () => {
  const {podcastId} = useParams();
  const navigate = useNavigate();
  const {isFetching, data} = usePodcastDetails(podcastId ?? '');
  const podcasts = useGetPodcastsSelector();
  const setSelectedPodcastSelector= useSetSelectedPodcastSelector();
  const selectedPodcast = podcasts.filter(({id}) => id.attributes?.id === podcastId)[0];
  const {artist, summary, name, image} = selectedPodcast;
  const sanitizeSummary = summary.label.replace(/\n/g, '<br>');

  useEffect(() => {
    setSelectedPodcastSelector(selectedPodcast);
  }, []);

  return isFetching ? (
    <Loader />
  ) : data ? (
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
  ) : (
    <NoResults />
  );
};

export default PodcastDetailsPage
