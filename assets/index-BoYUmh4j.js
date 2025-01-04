import { i as importShared } from './_virtual___federation_fn_import-79qq62bm.js';
import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';
import { r as reactDomExports } from './__federation_shared_react-dom-BOY597UY.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const remotesMap = {
'podcast':{url:'https://samdofe.github.io/inditex-challenge/podcast/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'react':{'18.3.1':{get:()=>get(new URL('__federation_shared_react-DYlhdcjt.js', import.meta.url).href, remoteFrom), loaded:1}},'react-dom':{'18.3.1':{get:()=>get(new URL('__federation_shared_react-dom-BOY597UY.js', import.meta.url).href, remoteFrom), loaded:1}},'react-router-dom':{'6.11.2':{get:()=>get(new URL('__federation_shared_react-router-dom-CL3h8WLq.js', import.meta.url).href, remoteFrom), loaded:1}},'@tanstack/react-query':{'5.62.9':{get:()=>get(new URL('__federation_shared_@tanstack/react-query-D2cX9AYP.js', import.meta.url).href, remoteFrom), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_wrapDefault(module, need) {
                    if (!module?.default && need) {
                        let obj = Object.create(null);
                        obj.default = module;
                        obj.__esModule = true;
                        return obj;
                    }
                    return module;
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const Pulse3Icon = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { "data-testid": "pulse3Icon-testid", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { cx: "12", cy: "12", r: "0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          id: "spinner_0Nme",
          begin: "0;spinner_ITag.begin+0.4s",
          attributeName: "r",
          calcMode: "spline",
          dur: "1.2s",
          values: "0;11",
          keySplines: ".52,.6,.25,.99",
          fill: "freeze"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          begin: "0;spinner_ITag.begin+0.4s",
          attributeName: "opacity",
          calcMode: "spline",
          dur: "1.2s",
          values: "1;0",
          keySplines: ".52,.6,.25,.99",
          fill: "freeze"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { cx: "12", cy: "12", r: "0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          id: "spinner_f83A",
          begin: "spinner_0Nme.begin+0.4s",
          attributeName: "r",
          calcMode: "spline",
          dur: "1.2s",
          values: "0;11",
          keySplines: ".52,.6,.25,.99",
          fill: "freeze"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          begin: "spinner_0Nme.begin+0.4s",
          attributeName: "opacity",
          calcMode: "spline",
          dur: "1.2s",
          values: "1;0",
          keySplines: ".52,.6,.25,.99",
          fill: "freeze"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { cx: "12", cy: "12", r: "0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          id: "spinner_ITag",
          begin: "spinner_0Nme.begin+0.8s",
          attributeName: "r",
          calcMode: "spline",
          dur: "1.2s",
          values: "0;11",
          keySplines: ".52,.6,.25,.99",
          fill: "freeze"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "animate",
        {
          begin: "spinner_0Nme.begin+0.8s",
          attributeName: "opacity",
          calcMode: "spline",
          dur: "1.2s",
          values: "1;0",
          keySplines: ".52,.6,.25,.99",
          fill: "freeze"
        }
      )
    ] })
  ] });
};

const header = "_header_dmb9f_7";
const header__title = "_header__title_dmb9f_15";
const header__icon = "_header__icon_dmb9f_23";
const styles$1 = {
	header: header,
	header__title: header__title,
	header__icon: header__icon
};

function CdkHeader({ title, showIcon = false, titleClickHandler }) {
  const onTitleClick = () => {
    titleClickHandler();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1["header"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1["header__title"], onClick: onTitleClick, children: title }),
    showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: styles$1["header__icon"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pulse3Icon, {}) })
  ] });
}

const shell = "_shell_1r8p7_1";
const shell__layout = "_shell__layout_1r8p7_5";
const styles = {
	shell: shell,
	shell__layout: shell__layout
};

const {Outlet,useNavigate,useNavigation} = await importShared('react-router-dom');
const ShellLayoutComponent = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["shell"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles["shell__layout"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CdkHeader, { title: "Podcaster", showIcon: navigation.state !== "idle", titleClickHandler: () => navigate("/") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] }) });
};

const {lazy} = await importShared('react');
const PodcastApp = lazy(
  () => __federation_method_getRemote("podcast" , "./PodcastApp").then(module=>__federation_method_wrapDefault(module, true)).catch(() => {
    return { default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Error Loading PodcastApp" }) };
  })
);
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ShellLayoutComponent, {}),
    children: [
      {
        index: true,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(PodcastApp, {})
      },
      {
        path: "/*",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(PodcastApp, {})
      }
    ]
  }
];

const {createBrowserRouter,RouterProvider} = await importShared('react-router-dom');
const router = createBrowserRouter(routes);
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router });
};

const {QueryClient} = await importShared('@tanstack/react-query');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

const {StrictMode} = await importShared('react');
const {QueryClientProvider} = await importShared('@tanstack/react-query');
const root = createRoot(
  document.getElementById("shell-root")
);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
//# sourceMappingURL=index-BoYUmh4j.js.map
