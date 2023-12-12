var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    exports.createCookie = node.createCookie;
    exports.createCookieSessionStorage = node.createCookieSessionStorage;
    exports.createFileSessionStorage = node.createFileSessionStorage;
    exports.createMemorySessionStorage = node.createMemorySessionStorage;
    exports.createSessionStorage = node.createSessionStorage;
    exports.unstable_createFileUploadHandler = node.unstable_createFileUploadHandler;
    exports.unstable_createMemoryUploadHandler = node.unstable_createMemoryUploadHandler;
    exports.unstable_parseMultipartFormData = node.unstable_parseMultipartFormData;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    exports.createSession = serverRuntime.createSession;
    exports.isCookie = serverRuntime.isCookie;
    exports.isSession = serverRuntime.isSession;
    exports.json = serverRuntime.json;
    exports.redirect = serverRuntime.redirect;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    exports.Form = react.Form;
    exports.Link = react.Link;
    exports.Links = react.Links;
    exports.LiveReload = react.LiveReload;
    exports.Meta = react.Meta;
    exports.NavLink = react.NavLink;
    exports.PrefetchPageLinks = react.PrefetchPageLinks;
    exports.RemixBrowser = react.RemixBrowser;
    exports.RemixServer = react.RemixServer;
    exports.Scripts = react.Scripts;
    exports.ScrollRestoration = react.ScrollRestoration;
    exports.useActionData = react.useActionData;
    exports.useBeforeUnload = react.useBeforeUnload;
    exports.useCatch = react.useCatch;
    exports.useFetcher = react.useFetcher;
    exports.useFetchers = react.useFetchers;
    exports.useFormAction = react.useFormAction;
    exports.useLoaderData = react.useLoaderData;
    exports.useMatches = react.useMatches;
    exports.useSubmit = react.useSubmit;
    exports.useTransition = react.useTransition;
    exports.Outlet = react.Outlet;
    exports.useHref = react.useHref;
    exports.useLocation = react.useLocation;
    exports.useNavigate = react.useNavigate;
    exports.useNavigationType = react.useNavigationType;
    exports.useOutlet = react.useOutlet;
    exports.useOutletContext = react.useOutletContext;
    exports.useParams = react.useParams;
    exports.useResolvedPath = react.useResolvedPath;
    exports.useSearchParams = react.useSearchParams;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix3 = __toESM(require_dist());

// app/styles/global.css
var global_default = "/build/_assets/global-K4C2GBKD.css";

// app/utils/session.server.ts
var import_bcrypt = __toESM(require("bcrypt"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// app/utils/session.server.ts
var import_remix2 = __toESM(require_dist());
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("No session secret");
var storage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "remixblog_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUser(request) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({ where: { id: userId } });
  } catch {
    return null;
  }
}

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], loader = async ({ request }) => ({
  user: await getUser(request)
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title || "Remix Blog" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 51
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  let { user } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Link, { to: "/", className: "logo", children: "Remix" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Link, { to: "/posts", children: "Posts" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        user ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { action: "/auth/logout", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "btn", children: [
          "Logout ",
          user.username
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Link, { to: "/auth/login", children: "Login" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container", children }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.log("Aca el puto error"), console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Welcome to Remix!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Remix is a full stack web framework by the creators of React Router. This is a simple blog app from the Traversy Media Remix crash course." }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var routes_default = Home;

// app/routes/posts/index.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default,
  loader: () => loader2
});
var import_remix4 = __toESM(require_dist());
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async () => ({
  posts: await db.post.findMany({
    take: 20,
    select: { id: !0, title: !0, createdAt: !0 },
    orderBy: { createdAt: "desc" }
  })
});
function PostItems() {
  let { posts } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Posts" }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix4.Link, { to: "/posts/new", className: "btn", children: "New Post" }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "posts-list", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix4.Link, { to: post.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: post.title }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 31,
        columnNumber: 15
      }, this),
      new Date(post.createdAt).toLocaleString()
    ] }, void 0, !0, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) }, post.id, !1, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 29,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var posts_default = PostItems;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DQG3JBNA.js", imports: ["/build/_shared/chunk-ZH5Q5KY5.js", "/build/_shared/chunk-A3HTF7WX.js", "/build/_shared/chunk-R5OLD7EO.js", "/build/_shared/chunk-HDQJTP7P.js", "/build/_shared/chunk-LUNS32HG.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-NITTFCHE.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-REO2Z2LH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-OYJIS54K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-AZNZOJWE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e41eac04", hmr: { runtime: "/build/_shared\\chunk-LUNS32HG.js", timestamp: 1694303668314 }, url: "/build/manifest-E41EAC04.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

remix/dist/index.js:
  (**
   * @remix-run/node v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
