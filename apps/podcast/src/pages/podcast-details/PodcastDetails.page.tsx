import React, { useEffect } from 'react';
import { usePodcastStore } from '@store';
import styles from './PodcastDetails.page.module.scss';
import { CdkCard } from "@inditex/cdk";
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';

export const PodcastDetailsPage = ()=>{
  const [podcastStore, setPodcastStore] = usePodcastStore();
  const { id } = useParams();
  const selectedPodcast = podcastStore.podcasts.filter(({ id:podcastId }) => podcastId.attributes?.id === id  )[0];
  useEffect(() => {
    setPodcastStore({
      ...podcastStore,
      selectedPodcast: {
        podcast: selectedPodcast
      }
    })
  }, []);
  const { artist, summary, name, image } = selectedPodcast;
  const sanitizeSummary = summary.label.replace(/\n/g, "<br>")
  console.log(podcastStore);
  console.log(id);
  return (
    <div className={styles['podcast-details']}>
      <div className={styles['podcast-details__card']}>
        <CdkCard
          title={name.label}
          subTitle={artist.label}
          imageUrl={image[2].label}
          description={DOMPurify.sanitize(sanitizeSummary)}/>
      </div>
      <div className={styles['podcast-details__episodes']}>
        <h1>Episodes List</h1>
      </div>
    </div>
  )
}
