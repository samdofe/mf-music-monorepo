import {useNavigate} from 'react-router-dom';
import React, {ReactElement, useState} from 'react';
import { CdkInputFilter, CdkThumbnail } from '@inditex/cdk';
import { usePodcastStore } from '@store';
import styles from './PodcastsGrid.page.module.scss';
import { useFilteredData } from '@hooks';

export const PodcastsGridPage = (): ReactElement => {
  const navigate = useNavigate();
  const [podcastStore] = usePodcastStore();
  const {podcasts} = podcastStore;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredData = useFilteredData({podcasts, searchQuery});

  return filteredData ? (
    <div className={styles['podcasts']}>
      <div className={styles['podcasts__filter-container']}>
        <CdkInputFilter
          totalResults={filteredData.length}
          placeholder={'Filter podcasts-grid...'}
          onSearchChange={setSearchQuery}
        />
      </div>
      <div className={styles['podcasts__grid']}>
        {filteredData.map((podcast) => {
          const {image, name, artist, id} = podcast;
          return (
          <CdkThumbnail
            key={id.attributes?.id}
            imgUrl={image[2].label}
            title={name.label.toUpperCase()}
            subTitle={`Author: ${artist.label}`}
            onThumbnailClick={()=> navigate(`/podcast/${id.attributes?.id}`)}
          />
        )})}
      </div>
    </div>
  ) : <div></div>
};

export default PodcastsGridPage;
