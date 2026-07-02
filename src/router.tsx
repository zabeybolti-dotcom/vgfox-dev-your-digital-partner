import { QueryClient } from "@tanstack/react-query";
import { createRouter, createBrowserHistory, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const isProd = process.env.NODE_ENV === 'production';

const routerHistory = isProd ? createHashHistory() : createBrowserHistory();

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    history: routerHistory,
    basepath: isProd ? '/vgfox-dev-your-digital-partner/' : '/',
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
