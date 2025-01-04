import "@testing-library/jest-dom";
import dotenv from 'dotenv';
import { afterEach, beforeAll, afterAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { http, HttpResponse } from 'msw';
import { podcastDetailsQueryResponse, podcastsLoadQueryResponse } from '@mocks';
import { setupServer } from 'msw/node';

dotenv.config();

const VITE_PODCAST_DETAILS_API_CONTEXT = import.meta.env.VITE_PODCAST_DETAILS_API_CONTEXT || '/lookup';

// Dynamic response generation (if needed)
const generateDynamicPodcastDetails = () => podcastDetailsQueryResponse;
const generateDynamicPodcastsLoad = () => podcastsLoadQueryResponse;

const restHandlers = [
  http.get(`https://api.allorigins.win/get`, ({ request }) => {
    const url = new URL(request.url);
    const itunesRequest = url.searchParams.get('url');

    if (itunesRequest?.includes(VITE_PODCAST_DETAILS_API_CONTEXT)) {
      return new HttpResponse(
        JSON.stringify({
          contents: JSON.stringify(generateDynamicPodcastDetails()),
          status: { /* same as before */ },
        }),
        { status: 200 }
      );
    }

    return new HttpResponse(
      JSON.stringify({
        contents: JSON.stringify(generateDynamicPodcastsLoad()),
        status: { /* same as before */ },
      }),
      { status: 200 }
    );
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
// Close server after all tests
afterAll(() => server.close());
// Cleanup and reset handlers after each test
afterEach(() => {
  cleanup();
  vi.resetAllMocks();
  server.resetHandlers();
});
