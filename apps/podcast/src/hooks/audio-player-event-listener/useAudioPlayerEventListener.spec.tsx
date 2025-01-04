import { render, cleanup, waitFor } from '@testing-library/react';
import { useRef } from 'react';
import { useAudioPlayerEventListener } from './useAudioPlayerEventListener';

describe('useAudioPlayerEventListener', () => {
  afterEach(cleanup);

  it('should initialize with controls disabled', () => {
    const TestComponent = () => {
      const audioRef = useRef<HTMLAudioElement>(null);
      const controlsEnabled = useAudioPlayerEventListener(audioRef);

      return (
        <div>
          <audio ref={audioRef}></audio>
          <span data-testid="controls-enabled">{`${controlsEnabled}`}</span>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const controlsEnabled = getByTestId('controls-enabled');
    expect(controlsEnabled.textContent).toBe('false');
  });

  it('should enable controls when "canplaythrough" event is triggered', async () => {
    const TestComponent = () => {
      const audioRef = useRef<HTMLAudioElement>(null);
      const controlsEnabled = useAudioPlayerEventListener(audioRef);

      return (
        <div>
          <audio ref={audioRef}></audio>
          <span data-testid="controls-enabled">{`${controlsEnabled}`}</span>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const audioElement = document.querySelector('audio') as HTMLAudioElement;

    // Trigger the 'canplaythrough' event
    const event = new Event('canplaythrough');
    audioElement.dispatchEvent(event);

    // Wait for the state to update
    await waitFor(() => {
      expect(getByTestId('controls-enabled').textContent).toBe('true');
    });
  });

  it('should clean up the event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(HTMLAudioElement.prototype, 'removeEventListener');

    const TestComponent = () => {
      const audioRef = useRef<HTMLAudioElement>(null);
      useAudioPlayerEventListener(audioRef);
      return <audio ref={audioRef}></audio>;
    };

    const { unmount } = render(<TestComponent />);
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'canplaythrough',
      expect.any(Function)
    );

    removeEventListenerSpy.mockRestore();
  });
});
