import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pb/navbar",
  app: () => System.import("@pb/navbar"),
  activeWhen: () => true
});

registerApplication({
  name: "@pb/angular-single",
  app: () => System.import("@pb/angular-single"),
  activeWhen: (location) => location.pathname === "/angular-single"
});

start({
  urlRerouteOnly: true,
});
