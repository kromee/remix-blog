import "/build/_shared/chunk-A3HTF7WX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-R5OLD7EO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HDQJTP7P.js";
import {
  createHotContext
} from "/build/_shared/chunk-LUNS32HG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-NITTFCHE.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/posts/index.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\posts\\\\index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\posts\\index.jsx"
  );
  import.meta.hot.lastModified = "1694301504573.562";
}
function PostItems() {
  _s();
  const {
    posts
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Posts" }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/posts/new", className: "btn", children: "New Post" }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "posts-list", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: post.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: post.title }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      new Date(post.createdAt).toLocaleString()
    ] }, void 0, true, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, post.id, false, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 53,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(PostItems, "TAfyE0i9dyPQ7/d8lmPxXUSIugM=", false, function() {
  return [useLoaderData];
});
_c = PostItems;
var posts_default = PostItems;
var _c;
$RefreshReg$(_c, "PostItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  posts_default as default
};
//# sourceMappingURL=/build/routes/posts-AZNZOJWE.js.map
