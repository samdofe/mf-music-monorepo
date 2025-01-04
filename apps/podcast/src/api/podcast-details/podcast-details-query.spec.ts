import { podcastDetailQuery } from './podcast-details-query';
import { expect } from 'vitest';
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_DETAILS_API_CONTEXT} = import.meta.env;

const podcastDetailsQueryResponse = {
  resultCount: 2,
  results: [
    {
      "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/56/08/14/560814ae-4069-567b-bd94-a93b3d714b24/mza_17923296488420025557.jpg/160x160bb.jpg",
      "episodeFileExtension": "mp3",
      "episodeContentType": "audio",
      "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/56/08/14/560814ae-4069-567b-bd94-a93b3d714b24/mza_17923296488420025557.jpg/600x600bb.jpg",
      "artistIds": [
        850139119
      ],
      "genres": [
        {
          "name": "Music",
          "id": "1310"
        }
      ],
      "episodeGuid": "prx_93_23392016-8ae9-4d68-9f67-f829274efdcb",
      "releaseDate": "2024-12-18T16:30:00Z",
      "shortDescription": "Sabrina Carpenter tells the story behind her song \"Please Please Please.\"",
      "trackId": 1000680847836,
      "trackName": "Sabrina Carpenter - Please Please Please",
      "feedUrl": "https://feed.songexploder.net/SongExploder",
      "closedCaptioning": "none",
      "collectionId": 788236947,
      "collectionName": "Song Exploder",
      "kind": "podcast-episode",
      "wrapperType": "podcastEpisode",
      "description": "Sabrina Carpenter is a singer, songwriter, and actress. She had a huge year with her album Short N Sweet, which came out in August 2024. It debuted at #1, and went platinum within a month. At the upcoming Grammys, she’s nominated for Song of the Year, Record of the Year, Album of the Year, and more. One of her big hits is “Please Please Please,” which she wrote with Amy Allen and producer Jack Antonoff. He’s won Producer of the Year at the Grammys for the last three years in a row. For this episode, I talked to Sabrina and Jack about everything that went into making “Please Please Please.” \n\nFor more, visit songexploder.net/sabrina-carpenter. ",
      "country": "USA",
      "artistViewUrl": "https://itunes.apple.com/us/artist/hrishikesh-hirway/850139119?mt=2&uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/podcast/song-exploder/id788236947?mt=2&uo=4",
      "trackViewUrl": "https://podcasts.apple.com/us/podcast/sabrina-carpenter-please-please-please/id788236947?i=1000680847836&uo=4",
      "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/56/08/14/560814ae-4069-567b-bd94-a93b3d714b24/mza_17923296488420025557.jpg/60x60bb.jpg",
      "trackTimeMillis": 1919000,
      "contentAdvisoryRating": "Explicit",
      "episodeUrl": "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/23392016-8ae9-4d68-9f67-f829274efdcb/SongExploder284-SabrinaCarpenter-Part1.mp3",
      "previewUrl": "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/23392016-8ae9-4d68-9f67-f829274efdcb/SongExploder284-SabrinaCarpenter-Part1.mp3"
    },
    {
      "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/8a/1b/53/8a1b53eb-3ff4-acfb-33a5-78e723a8cd68/mza_11431491374390833165.jpg/160x160bb.jpg",
      "episodeFileExtension": "mp3",
      "episodeContentType": "audio",
      "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/8a/1b/53/8a1b53eb-3ff4-acfb-33a5-78e723a8cd68/mza_11431491374390833165.jpg/600x600bb.jpg",
      "artistIds": [
        850139119
      ],
      "genres": [
        {
          "name": "Music",
          "id": "1310"
        }
      ],
      "episodeGuid": "prx_93_b15bffc8-71a5-4538-a4d5-78b953171732",
      "releaseDate": "2024-12-04T18:24:46Z",
      "shortDescription": "Gracie Abrams breaks down her song \"I Love You, I'm Sorry.\"",
      "trackId": 1000679239843,
      "trackName": "Gracie Abrams - I Love You, I'm Sorry",
      "feedUrl": "https://feed.songexploder.net/SongExploder",
      "closedCaptioning": "none",
      "collectionId": 788236947,
      "collectionName": "Song Exploder",
      "kind": "podcast-episode",
      "wrapperType": "podcastEpisode",
      "description": "Gracie Abrams is a singer and songwriter from Los Angeles. She started putting out music in 2020, and in June 2024, she put out her second album, The Secret of Us. She was nominated for a Grammy for Best New Artist, and this year she’s up for another Grammy, for Best Duo Performance, for her collaboration with Taylor Swift. But for this episode, I talked to Gracie about her song “I Love You, I’m Sorry.” It was produced by Aaron Dessner, at Long Pond Studio in upstate New York, and it was co-written with Audrey Hobert.\n\nComing up, you’ll hear the isolated tracks from the studio recording, but you’ll also get to hear a lot of the voice memos that Gracie recorded during the writing process. I think it’s so nice to have these raw moments documented because, as you’ll hear, they give you an insight not just into the song, but into the relationship that Gracie and her co-writer Audrey have as friends.\n\nFor more, visit songexploder.net/gracie-abrams. ",
      "country": "USA",
      "artistViewUrl": "https://itunes.apple.com/us/artist/hrishikesh-hirway/850139119?mt=2&uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/podcast/song-exploder/id788236947?mt=2&uo=4",
      "trackViewUrl": "https://podcasts.apple.com/us/podcast/gracie-abrams-i-love-you-im-sorry/id788236947?i=1000679239843&uo=4",
      "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/8a/1b/53/8a1b53eb-3ff4-acfb-33a5-78e723a8cd68/mza_11431491374390833165.jpg/60x60bb.jpg",
      "trackTimeMillis": 1552000,
      "contentAdvisoryRating": "Explicit",
      "episodeUrl": "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/b15bffc8-71a5-4538-a4d5-78b953171732/SongExploder283-GraceAbrams-Part1.mp3",
      "previewUrl": "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/b15bffc8-71a5-4538-a4d5-78b953171732/SongExploder283-GraceAbrams-Part1.mp3"
    },
  ]
};

const apiGetMock = new HttpResponse(JSON.stringify(
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

const requestMock = `${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_DETAILS_API_CONTEXT}?id=123&media=podcast&entity=podcastEpisode&limit=20`;

export const restHandlers = [
  http.get(`https://api.allorigins.win/get?url=${encodeURIComponent(requestMock)}`,  () => {
    return apiGetMock;
  }),
];

const server = setupServer(...restHandlers);

describe('podcastDetailQuery', () => {

// Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
  afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers())

  it('should return parsed podcast details when the API call is successful', async () => {

    const {resultCount, episodes} = await podcastDetailQuery(123);

    expect(resultCount).toEqual(1);
    expect(episodes.length).toEqual(1);
    expect(episodes[0]).toEqual(podcastDetailsQueryResponse.results[1]);
  });
});
