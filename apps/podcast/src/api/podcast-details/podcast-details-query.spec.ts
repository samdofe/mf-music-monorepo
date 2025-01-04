import { podcastDetailQuery } from './podcast-details-query';
import { expect } from 'vitest';
import { podcastDetailsQueryResponse } from '@mocks';

describe('podcastDetailQuery', () => {

  it('should return parsed podcast details when the API call is successful', async () => {

    const {resultCount, episodes} = await podcastDetailQuery(123);

    expect(resultCount).toEqual(1);
    expect(episodes.length).toEqual(1);
    expect(episodes[0]).toEqual(podcastDetailsQueryResponse.results[1]);
  });
});
