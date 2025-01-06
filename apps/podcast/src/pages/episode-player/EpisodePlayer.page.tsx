import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useAudioPlayerEventListener, useScrollToTop } from '@hooks';
import { useGetEpisodesListSelector } from '@store';
import { Loader } from '@ui';
import styles from './EpisodePlayer.page.module.scss';

export const EpisodePlayerPage = ()=>{
  useScrollToTop();
  const { episodeId } = useParams();
  const { episodes } = useGetEpisodesListSelector();
  const audioRef = useRef<HTMLAudioElement>(null);
  const {description, trackName, episodeUrl} = episodes.filter(({trackId}) => Number(episodeId) === trackId)[0];
  const sanitizeDescription = description.replace(/\n/g, '<br>');
  const controlsEnabled = useAudioPlayerEventListener(audioRef);

  return (
    <div className={styles['episode-player']}>
      <span className={styles['episode-player__title']}>{trackName}</span>
      <span className={styles['episode-player__description']}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizeDescription) }}></span>
      <audio
        id="audioPlayer"
        ref={audioRef}
        className={styles['episode-player__audio-player']}
        controls={controlsEnabled}
        data-testid="audio-player-testid"
      >
          <source
            src={episodeUrl}
            type="audio/mpeg" />
          Your browser does not support the audio element.
      </audio>
      {
        !controlsEnabled && <Loader />
      }
    </div>
  )
}

export default EpisodePlayerPage;
