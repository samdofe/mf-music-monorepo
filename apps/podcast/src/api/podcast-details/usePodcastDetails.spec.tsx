import { expect } from 'vitest';
import { podcastDetailsQueryResponse } from '@mocks';
import { usePodcastDetails } from '@api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { PodcastStoreProvider } from '@store';

describe('usePodcastDetails', () => {
  const createQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60, // Keep data fresh for 1 minute
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
    const { result } = renderHook(() => usePodcastDetails(123), { wrapper });

    // Wait until data is populated
    await waitFor(() => result.current.data !== undefined);

    expect(result.current.data?.episodes[0]).toEqual(podcastDetailsQueryResponse.results[1]);
  });
});
