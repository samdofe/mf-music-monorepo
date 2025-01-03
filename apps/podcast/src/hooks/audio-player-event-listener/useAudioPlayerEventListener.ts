import { RefObject, useEffect, useState } from 'react';

export const useAudioPlayerEventListener = (audioRef: RefObject<HTMLAudioElement>)=>{
  const [controlsEnabled, setControlsEnabled] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handleCanPlayThrough = () => {
      setControlsEnabled(true);
    };

    audioElement.addEventListener('canplaythrough', handleCanPlayThrough);

    // Clean up event listener when component is unmounted
    return () => {
      audioElement.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  return controlsEnabled;
}
