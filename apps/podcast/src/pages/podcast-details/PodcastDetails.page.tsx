import React, {useEffect} from 'react';
import { Outlet, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { CdkCard, CdkTable, ICdkTableConfig } from '@inditex/cdk';
import {ThreeDotsScaleIcon} from '@inditex/icons';
import { DATE_FORMATS, TIME_FORMATS } from '@inditex/utils';
import {usePodcastDetails} from '@api';
import {
  useGetEpisodesListSelector,
  useGetPodcastsSelector,
  useSetSelectedPodcastSelector
} from '@store';
import { IEpisode } from '@models';
import { BoxTitle } from '@ui';
import styles from './PodcastDetails.page.module.scss';

const tableConfig: ICdkTableConfig<IEpisode> = {
  headersTemplateStyle: '1fr 80px 100px',
  headers: [
    {
      key: 'trackName',
      label: 'Title',
      customStyles: {
        display: 'flex',
        alignItems: 'center'
      },
    },
    {
      key: 'releaseDate',
      label: 'Date',
      format: DATE_FORMATS.DATE_LOCALE_STRING
    },
    {
      key: 'trackTimeMillis',
      label: 'Duration',
      customStyles: {
        display: 'flex',
        justifyContent: 'center'
      },
      format: TIME_FORMATS.MM_SS
    }
  ],
  data: []
}

export const PodcastDetailsPage = () => {
  const {podcastId} = useParams();
  const {isFetching} = usePodcastDetails(podcastId ?? '');
  const podcasts = useGetPodcastsSelector();
  const episodesList = useGetEpisodesListSelector();
  tableConfig.data = episodesList?.episodes ?? [];
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
          onClickHandler={() => {console.log('click on card ...')}}
        />
      </div>
      <div className={styles['podcast-details__episodes']}>
        <Outlet />
        <BoxTitle title={`Episodes: ${episodesList?.resultCount}`}></BoxTitle>
        <CdkTable<IEpisode> {...tableConfig} onRowClickHandler={(episode)=>{console.log('row clicked : ', episode)}}></CdkTable>
      </div>
    </div>
  );
};
