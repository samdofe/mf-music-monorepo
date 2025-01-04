import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EpisodesListPage } from './EpisodesList.page';
import { useGetEpisodesListSelector } from '@store';
import { useNavigate } from 'react-router-dom';
import { vi } from 'vitest';

// Mock dependencies
vi.mock('@store', () => ({
  useGetEpisodesListSelector: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('EpisodesListPage', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as ReturnType<typeof vi.fn>).mockReturnValue(mockNavigate);
  });

  it('renders the BoxTitle with the correct episode count', () => {
    const mockEpisodesList = { resultCount: 3, episodes: [] };
    (useGetEpisodesListSelector as ReturnType<typeof vi.fn>).mockReturnValue(mockEpisodesList);

    render(<EpisodesListPage />);

    expect(screen.getByText(/Episodes: 3/i)).toBeInTheDocument();
  });

  it('renders the table with correct data', () => {
    const mockEpisodes = [
      { trackId: 1, trackName: 'Episode 1', releaseDate: '2025-01-01', trackTimeMillis: 3600000 },
      { trackId: 2, trackName: 'Episode 2', releaseDate: '2025-01-02', trackTimeMillis: 4200000 },
    ];
    (useGetEpisodesListSelector as ReturnType<typeof vi.fn>).mockReturnValue({ resultCount: 2, episodes: mockEpisodes });

    render(<EpisodesListPage />);

    // Check if headers are rendered
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();

    // Check if data rows are rendered
    mockEpisodes.forEach((episode) => {
      expect(screen.getByText(episode.trackName)).toBeInTheDocument();
    });
  });

  it('navigates to the correct URL when a row is clicked', async () => {
    const mockEpisodes = [
      { trackId: 1, trackName: 'Episode 1', releaseDate: '2025-01-01', trackTimeMillis: 3600000 },
    ];
    (useGetEpisodesListSelector as ReturnType<typeof vi.fn>).mockReturnValue({ resultCount: 1, episodes: mockEpisodes });

    render(<EpisodesListPage />);

    const row = screen.getByText('Episode 1');
    await userEvent.click(row);

    expect(mockNavigate).toHaveBeenCalledWith('episode/1');
  });
});
