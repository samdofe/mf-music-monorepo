import { podcastsLoadQuery } from './podcasts-load-query';
import { expect } from 'vitest';
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_LOAD_API_CONTEXT} = import.meta.env;

const podcastsLoadQueryResponse = {
  "feed": {
    "author": {
      "name": {
        "label": "iTunes Store"
      },
      "uri": {
        "label": "http://www.apple.com/itunes/"
      }
    },
    "entry": [
      {
        "name": {
          "label": "The Joe Budden Podcast"
        },
        "image": [
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "summary": {
          "label": "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
        },
        "price": {
          "label": "Get",
          "attributes": {
            "amount": "0",
            "currency": "USD"
          }
        },
        "contentType": {
          "attributes": {
            "term": "Podcast",
            "label": "Podcast"
          }
        },
        "rights": {
          "label": "© All rights reserved"
        },
        "title": {
          "label": "The Joe Budden Podcast - The Joe Budden Network"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2"
          }
        },
        "id": {
          "label": "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
          "attributes": {
            "id": "1535809341"
          }
        },
        "artist": {
          "label": "The Joe Budden Network",
          "attributes": {
            "href": "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"
          }
        },
        "category": {
          "attributes": {
            "id": "1310",
            "term": "Music",
            "scheme": "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            "label": "Music"
          }
        },
        "releaseDate": {
          "label": "2025-01-04T00:00:00-07:00",
          "attributes": {
            "label": "January 4, 2025"
          }
        }
      }
    ],
    "updated": {
      "label": "2025-01-04T11:18:32-07:00"
    },
    "rights": {
      "label": "Copyright 2008 Apple Inc."
    },
    "title": {
      "label": "iTunes Store: Top Podcasts in Music"
    },
    "icon": {
      "label": "http://itunes.apple.com/favicon.ico"
    },
    "link": [
      {
        "attributes": {
          "rel": "alternate",
          "type": "text/html",
          "href": "https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3"
        }
      },
      {
        "attributes": {
          "rel": "self",
          "href": "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        }
      }
    ],
    "id": {
      "label": "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    }
  }
};

const apiGetMock = new HttpResponse(JSON.stringify(
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

const requestMock = `${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_LOAD_API_CONTEXT}/limit=100/genre=1310/json`;

export const restHandlers = [
  http.get(`https://api.allorigins.win/get?url=${encodeURIComponent(requestMock)}`,  () => {
    return apiGetMock;
  }),
];

const server = setupServer(...restHandlers);

describe('podcastsLoadQuery', () => {

// Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
  afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers())

  it('should return parsed podcasts list when the API call is successful', async () => {

    const entry = await podcastsLoadQuery();

    expect(entry.length).toEqual(1);
    expect(entry[0]).toEqual(podcastsLoadQueryResponse.feed.entry[0]);
  });
});
