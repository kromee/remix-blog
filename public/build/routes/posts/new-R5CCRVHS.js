import "/build/_shared/chunk-WYGWHMA6.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useActionData
} from "/build/_shared/chunk-M5J6LJYO.js";
import "/build/_shared/chunk-Z5V2Z3U7.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\Eduardo\Desktop\cursos\remix-blog\app\routes\posts\new.jsx?browser
init_react();

// app/routes/posts/new.jsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function NewPost() {
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "New Post"), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "btn btn-reverse"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    defaultValue: actionData?.fields?.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, actionData?.fieldErrors?.title ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "title-error"
  }, actionData.fieldErrors.title) : null)), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "body"
  }, "Post Body"), /* @__PURE__ */ React.createElement("textarea", {
    name: "body",
    id: "body",
    defaultValue: actionData?.fields?.body
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, actionData?.fieldErrors?.body ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "body-error"
  }, actionData.fieldErrors.body) : null)), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-block"
  }, "Add Post"))));
}
var new_default = NewPost;
export {
  new_default as default
};
//# sourceMappingURL=/build/routes/posts/new-R5CCRVHS.js.map
