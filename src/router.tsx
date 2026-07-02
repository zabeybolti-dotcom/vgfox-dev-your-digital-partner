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
    // Самое важное: basepath должен быть только в режиме продакшена! Локально он должен быть равен '/'
    basepath: isProd ? '/vgfox-dev-your-digital-partner/' : '/',
    context: { queryClient },
    defaultPreloadStaleTime: 0,
  });

  return router;
};
