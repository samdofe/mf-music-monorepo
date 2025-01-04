import "@testing-library/jest-dom";
import dotenv from 'dotenv';
import { afterEach, beforeAll, afterAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { http, HttpResponse } from 'msw';
import { podcastDetailsQueryResponse, podcastsLoadQueryResponse } from '@mocks';
import { setupServer } from 'msw/node';

dotenv.config();

const { VITE_PODCAST_DETAILS_API_CONTEXT } = import.meta.env;

const podcastDetailsApiGetMock = new HttpResponse(JSON.stringify(
  {
    "contents": JSON.stringify(podcastDetailsQueryResponse),
    "status": {
      "url": "https://itunes.apple.com/lookup?id=123&media=podcast&entity=podcastEpisode&limit=20",
      "content_type": "text/javascript; charset=utf-8",
      "http_code": 200,
      "response_time": 54,
      "content_length": 11548
    }
  }
), {status:200});

const podcastsLoadApiGetMock = new HttpResponse(JSON.stringify(
  {
    "contents": JSON.stringify(podcastsLoadQueryResponse),
    "status": {
      "url": "https://itunes.apple.com/lookup?id=123&media=podcast&entity=podcastEpisode&limit=20",
      "content_type": "text/javascript; charset=utf-8",
      "http_code": 200,
      "response_time": 54,
      "content_length": 11548
    }
  }
), {status:200});

const restHandlers = [
  http.get(`https://api.allorigins.win/get`, ({request}) => {
    const url = new URL(request.url)
    const itunesRequest = url.searchParams.get('url');

    return itunesRequest?.includes(VITE_PODCAST_DETAILS_API_CONTEXT)
    ? podcastDetailsApiGetMock
    : podcastsLoadApiGetMock

  })
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
//  Close server after all tests
afterAll(() => server.close())

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
  // Reset handlers after each test `important for test isolation`
  server.resetHandlers();
});
