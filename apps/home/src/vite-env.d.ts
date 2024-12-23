/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ITUNES_API_DOMAIN: string;
  readonly VITE_PODCAST_LOAD_API_CONTEXT: string;
  readonly VITE_PODCAST_DETAILS_API_CONTEXT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
