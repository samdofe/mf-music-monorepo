import { expect } from 'vitest';
import { podcastsLoadQueryResponse } from '@mocks';
import { usePodcastsLoad } from '@api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { PodcastStoreProvider } from '@store';

describe('usePodcastsLoad', () => {
  const createQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

  const wrapper = ({ children }: { children: React.ReactNode }) => {
    const queryClient = createQueryClient();
    return (
      <PodcastStoreProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </PodcastStoreProvider>
    );
  };

  it('should return podcast details data', async () => {
    const { result } = renderHook(() => usePodcastsLoad(), { wrapper });

    // Wait until data is populated
    await waitFor(() => result.current.data !== undefined);
    const entry = result.current.data ?? [];

    expect(entry[0]).toEqual(podcastsLoadQueryResponse.feed.entry[0]);
  });
});
