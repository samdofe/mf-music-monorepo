import { podcastsLoadQuery } from './podcasts-load-query';
import { expect } from 'vitest';
import { podcastsLoadQueryResponse } from '@mocks';

describe('podcastsLoadQuery', () => {

  it('should return parsed podcasts list when the API call is successful', async () => {

    const entry = await podcastsLoadQuery();

    expect(entry.length).toEqual(1);
    expect(entry[0]).toEqual(podcastsLoadQueryResponse.feed.entry[0]);
  });
});
