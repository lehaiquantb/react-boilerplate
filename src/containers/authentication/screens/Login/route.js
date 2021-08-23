import { lazy } from "react";
import { initModules } from '../../../../router';

export default {
  path: "/login",
  exact: true,
  isPrivate: false,
  component: lazy(async () => {
    await initModules([{ path: "Login", key: "login" }], 'authentication');
    return import(".");
  }),
};
