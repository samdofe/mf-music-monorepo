import {useNavigate} from 'react-router-dom';
import React, {ReactElement, useState} from 'react';
import {usePodcastLoad} from '@api';
import {ThreeDotsScaleIcon} from '@inditex/icons';
import styles from './podcasts.page.module.scss';
import { CdkInputFilter, CdkThumbnail } from '@inditex/cdk';

const useDelayedNavigation = () => {
  const navigate = useNavigate();

  return (to: string, options?: any) => {
    setTimeout(() => navigate(to, options), 3000); // Delay navigation by 3 seconds
  };
};

export const PodcastsPage = (): ReactElement => {
  const {data, isFetching} = usePodcastLoad();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = data?.filter((podcast) => {
    const matchesName = podcast.name.label.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAuthor = podcast.artist.label.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesName || matchesAuthor;
  });

  return isFetching ? (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ThreeDotsScaleIcon />
    </div>
  ) : filteredData ? (
    <div className={styles['podcasts']}>
      <div className={styles['podcasts__filter-container']}>
        <CdkInputFilter
          totalResults={filteredData.length}
          placeholder={'Filter podcasts...'}
          onSearchChange={setSearchQuery}
        />
      </div>
      <div className={styles['podcasts__grid']}>
        {filteredData.map(({image, name, artist, id}) => (
          <CdkThumbnail
            imgUrl={image[2].label}
            title={name.label.toUpperCase()}
            subTitle={`Author: ${artist.label}`}
            onThumbnailClick={()=> navigate(`/podcast/${id.attributes?.id}`)}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <p>NO RESULTS FOUND</p>
    </div>
  );
};

export default PodcastsPage;
