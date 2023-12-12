import "/build/_shared/chunk-WYGWHMA6.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  useActionData
} from "/build/_shared/chunk-M5J6LJYO.js";
import "/build/_shared/chunk-Z5V2Z3U7.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\Eduardo\Desktop\cursos\remix-blog\app\routes\auth\login.jsx?browser
init_react();

// app/routes/auth/login.jsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function Login() {
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "auth-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Login or Register"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !actionData?.fields?.loginType || actionData?.fields?.loginType === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: actionData?.fields?.loginType === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    defaultValue: actionData?.fields?.username
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, actionData?.fieldErrors?.username ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, actionData.fieldErrors.username) : null)), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    defaultValue: actionData?.fields?.password
  }), /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, actionData?.fieldErrors?.password ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "password-error"
  }, actionData.fieldErrors.password) : null)), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-block",
    type: "submit"
  }, "Submit"))));
}
var login_default = Login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/auth/login-ZEUMUHBR.js.map
