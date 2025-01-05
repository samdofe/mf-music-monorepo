import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import PodcastsGridPage from './PodcastsGrid.page';
import '@testing-library/jest-dom';

const mocks = vi.hoisted(() => {
  return {
    usePodcastStore: vi.fn(),
    useNavigate: vi.fn(),
    CdkInputFilter: ({ onSearchChange }: {onSearchChange: (evt: string) => void}) => (
      <input
        data-testid="cdk-input-filter-testid"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    ),
  };
});

vi.mock('@store', async (importOriginal) => {
  const actual = await importOriginal<typeof import("@store")>();
  return {
    ...actual,
    usePodcastStore: mocks.usePodcastStore,
  }
});

vi.mock('@inditex/cdk', async (importOriginal) => {
  const actual = await importOriginal<typeof import("@inditex/cdk")>();
  return {
    ...actual,
    CdkInputFilter: mocks.CdkInputFilter
  }
});

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useNavigate: mocks.useNavigate,
  }
});

describe('PodcastsGridPage', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    // Reset the mocks before each test
    vi.clearAllMocks();
    (useNavigate as ReturnType<typeof vi.fn>).mockReturnValue(mockNavigate);
  });

  it('should render PodcastsGridPage correctly', async () => {
    const mockPodcasts = [
      { id: { attributes: { id: '1' } }, image: [{ label: '' }, {}, { label: 'image_url_1' }], name: { label: 'Podcast 1' }, artist: { label: 'Artist 1' } },
      { id: { attributes: { id: '2' } }, image: [{ label: '' }, {}, { label: 'image_url_2' }], name: { label: 'Podcast 2' }, artist: { label: 'Artist 2' } }
    ];

    mocks.usePodcastStore.mockReturnValue([{ podcasts: mockPodcasts }]);

    render(
      <BrowserRouter>
        <PodcastsGridPage />
      </BrowserRouter>
    );

    // Ensure filter input is rendered
    expect(screen.getByTestId('cdk-input-filter-testid')).toBeInTheDocument();

    // Ensure podcasts are rendered
    expect(screen.getByText('PODCAST 1')).toBeInTheDocument();
    expect(screen.getByText('PODCAST 2')).toBeInTheDocument();
  });

  it('should update search query and filter podcasts', async () => {
    const mockPodcasts = [
      { id: { attributes: { id: '1' } }, image: [{ label: '' }, {}, { label: 'image_url_1' }], name: { label: 'Podcast 1' }, artist: { label: 'Artist 1' } },
      { id: { attributes: { id: '2' } }, image: [{ label: '' }, {}, { label: 'image_url_2' }], name: { label: 'Podcast 2' }, artist: { label: 'Artist 2' } }
    ];

    mocks.usePodcastStore.mockReturnValue([{ podcasts: mockPodcasts }]);

    render(
      <BrowserRouter>
        <PodcastsGridPage />
      </BrowserRouter>
    );

    expect(screen.queryByText('PODCAST 2')).toBeInTheDocument();

    // Change search query
    fireEvent.change(screen.getByTestId('cdk-input-filter-testid'), { target: { value: 'Podcast 1' } });

    // Ensure filtered podcasts are rendered
    await waitFor(() => {
      expect(screen.getByText('PODCAST 1')).toBeInTheDocument()
    });
    expect(screen.queryByText('PODCAST 2')).not.toBeInTheDocument();
  });

  it('should navigate to podcast detail page on thumbnail click', async () => {
    const mockPodcasts = [
      { id: { attributes: { id: '1' } }, image: [{ label: '' }, {}, { label: 'image_url_1' }], name: { label: 'Podcast 1' }, artist: { label: 'Artist 1' } }
    ];

    mocks.usePodcastStore.mockReturnValue([{ podcasts: mockPodcasts }]);

    render(
      <BrowserRouter>
        <PodcastsGridPage />
      </BrowserRouter>
    );

    // Simulate thumbnail click
    fireEvent.click(screen.getByText('PODCAST 1'));

    // Ensure navigate was called
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');
  });
});
