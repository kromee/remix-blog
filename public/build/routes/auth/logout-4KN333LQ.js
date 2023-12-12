import {
  import_server_runtime
} from "/build/_shared/chunk-WYGWHMA6.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import "/build/_shared/chunk-Z5V2Z3U7.js";
import {
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\Eduardo\Desktop\cursos\remix-blog\app\routes\auth\logout.jsx?browser
init_react();

// app/routes/auth/logout.jsx
init_react();
var import_session = __toModule(require_session());
var action = async ({ request }) => {
  return (0, import_session.logout)(request);
};
var loader = async () => {
  return (0, import_server_runtime.redirect)("/");
};
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/auth/logout-4KN333LQ.js.map
