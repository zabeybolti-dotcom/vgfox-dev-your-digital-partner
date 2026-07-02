import { QueryClient } from "@tanstack/react-query";
import { createBrowserHistory, createHashHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const isProd = process.env.NODE_ENV === 'production';

// Локально используем чистый BrowserHistory, для GitHub Pages — HashHistory
const routerHistory = isProd ? createHashHistory() : createBrowserHistory();

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    history: routerHistory,
    // Хэш-история всегда даёт путь от корня (/), поэтому basepath всегда '/'
    basepath: '/',
    context: { queryClient },
    defaultPreloadStaleTime: 0,
  });

  return router;
};
