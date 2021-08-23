import { lazy } from "react";
import { initModules } from "../../../../router/index";

export default {
  path: "/feed",
  exact: false,
  component: lazy(async () => {
    await initModule([
      { key: 'feeds', path: 'Feed' },
    ]);
    return import(".");
  }),
};
