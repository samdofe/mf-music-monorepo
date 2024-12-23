import { TRequestMethod } from './api.model';

const allOriginsWrapper = `https://api.allorigins.win/get?url=`;

export const fetchOptions = (
  httpMethod: TRequestMethod = "GET",
  requestBody: BodyInit | null | undefined = null,
): RequestInit => {

  return {
    method: httpMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  };
};

export const api = {
  get: (requestPath: string, corsEnable=false): Promise<Response> => {
    const request = corsEnable
    ? `${allOriginsWrapper}${encodeURIComponent(requestPath)}`
      : requestPath;

    return fetch(
      request,
      fetchOptions(),
    );
  }
};
