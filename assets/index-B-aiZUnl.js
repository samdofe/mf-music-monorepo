import { importShared } from './__federation_fn_import-DPXHpT1Z.js';
import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';
import { r as reactDomExports } from './__federation_shared_react-dom-BOY597UY.js';
import App, { q as queryClient } from './__federation_expose_PodcastApp-c9sTpyG6.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
const {BrowserRouter} = await importShared('react-router-dom');
const {QueryClientProvider} = await importShared('@tanstack/react-query');
const root = client.createRoot(document.getElementById("podcast-root"));
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) })
);
//# sourceMappingURL=index-B-aiZUnl.js.map
