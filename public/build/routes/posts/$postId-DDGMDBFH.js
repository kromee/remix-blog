import "/build/_shared/chunk-WYGWHMA6.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-M5J6LJYO.js";
import "/build/_shared/chunk-Z5V2Z3U7.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\Eduardo\Desktop\cursos\remix-blog\app\routes\posts\$postId.jsx?browser
init_react();

// app/routes/posts/$postId.jsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function Post() {
  const { post, user } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, post.body), /* @__PURE__ */ React.createElement("div", {
    className: "page-footer"
  }, user.id === post.userId && /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-delete"
  }, "Delete"))));
}
var postId_default = Post;
export {
  postId_default as default
};
//# sourceMappingURL=/build/routes/posts/$postId-DDGMDBFH.js.map
