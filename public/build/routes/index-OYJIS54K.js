import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HDQJTP7P.js";
import {
  createHotContext
} from "/build/_shared/chunk-LUNS32HG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-NITTFCHE.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\index.jsx"
  );
  import.meta.hot.lastModified = "1694301504439.347";
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Welcome to Remix!" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Remix is a full stack web framework by the creators of React Router. This is a simple blog app from the Traversy Media Remix crash course." }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Home;
var routes_default = Home;
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-OYJIS54K.js.map
