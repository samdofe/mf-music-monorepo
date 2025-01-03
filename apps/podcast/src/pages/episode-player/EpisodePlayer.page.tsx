import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useGetEpisodesListSelector } from '@store';

import styles from './EpisodePlayer.page.module.scss';

export const EpisodePlayerPage = ()=>{
  const { episodeId } = useParams();
  const { episodes } = useGetEpisodesListSelector();
  const {description, trackName, episodeUrl} = episodes.filter(({trackId}) => Number(episodeId) === trackId)[0];
  const sanitizeDescription = description.replace(/\n/g, '<br>');

  return (
    <div className={styles['episode-player']}>
      <span className={styles['episode-player__title']}>{trackName}</span>
      <span className={styles['episode-player__description']} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizeDescription) }}></span>
      <audio className={styles['episode-player__audio-player']} controls>
        <source
          src={episodeUrl}
          type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default EpisodePlayerPage;
