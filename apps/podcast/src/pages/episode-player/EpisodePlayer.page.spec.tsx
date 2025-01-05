import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { EpisodePlayerPage } from './EpisodePlayer.page';

const mocks = vi.hoisted(() => {
  return {
    sanitize: vi.fn(),
    useScrollToTop: vi.fn(),
    useAudioPlayerEventListener: vi.fn(),
    useGetEpisodesListSelector: vi.fn(),
  };
});

// Mocking hooks
vi.mock('@hooks', async (importOriginal) => {
  const actual = await importOriginal<typeof import("@hooks")>();
  return {
    ...actual,
    useScrollToTop: mocks.useScrollToTop,
    useAudioPlayerEventListener: mocks.useAudioPlayerEventListener,
  }
});

vi.mock('@store', async (importOriginal) => {
  const actual = await importOriginal<typeof import("@store")>();
  return {
    ...actual,
    useGetEpisodesListSelector: mocks.useGetEpisodesListSelector,
  }
});

vi.mock('dompurify', async (importOriginal) => {
  const actual = await importOriginal<typeof import("dompurify")>();
  return {
    default: {
      ...actual,
      sanitize: mocks.sanitize,
    }
  };

});

describe('EpisodePlayerPage', () => {
  const mockEpisodes = [
    {
      trackId: 1,
      trackName: 'Test Episode',
      description: 'This is a test\ndescription.',
      episodeUrl: 'http://example.com/audio.mp3',
      releaseDate: '2025-01-04T00:00:00-07:00',
      trackTimeMillis: 1919000,
    },
  ];

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mocks.useScrollToTop.mockImplementation(()=> {});
    mocks.useAudioPlayerEventListener.mockReturnValue(true);
    mocks.useGetEpisodesListSelector.mockReturnValue({ episodes: mockEpisodes, resultCount: 1 });
    mocks.sanitize.mockImplementation((input) => input);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });

  const renderComponent = (episodeId: string) => {
    render(
      <MemoryRouter initialEntries={[`/episode/${episodeId}`]}>
        <Routes>
          <Route path="/episode/:episodeId" element={<EpisodePlayerPage />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('renders the episode title and sanitized description', () => {
    renderComponent('1');
    expect(screen.getByText('Test Episode')).toBeInTheDocument();
    expect(screen.getByText('This is a testdescription.')).toBeInTheDocument();
    expect(mocks.sanitize).toBeCalledWith('This is a test<br>description.');
  });

  it('renders the audio player with the correct source', () => {
    renderComponent('1');
    const audioSource = screen.getByTestId('audio-player-testid').querySelector('source');
    expect(audioSource).toHaveAttribute('src', 'http://example.com/audio.mp3');
    expect(audioSource).toHaveAttribute('type', 'audio/mpeg');
  });

  it('renders the loader when controls are disabled', () => {
    mocks.useAudioPlayerEventListener.mockReturnValue(false);
    renderComponent('1');
    expect(screen.getByTestId('three-dots-scale-icon-testid')).toBeInTheDocument();
  });

  it('does not render the loader when controls are enabled', () => {
    mocks.useAudioPlayerEventListener.mockReturnValue(true);
    renderComponent('1');
    expect(screen.queryByTestId('three-dots-scale-icon-testid')).not.toBeInTheDocument();
  });
});
