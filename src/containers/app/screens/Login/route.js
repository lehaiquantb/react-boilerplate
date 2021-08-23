import { lazy } from "react";
import { initModule } from '../../../../router';

export default {
  path: "/login",
  exact: true,
  isPrivate: false,
  component: lazy(async () => {
    // await initModule("Login", "login");
    return import(".");
  }),
};
