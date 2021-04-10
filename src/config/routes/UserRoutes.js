import { lazy } from "react";

// Import The Page
const Home = lazy(() => import("../../pages/Home/Home"));

// Routing
const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
];

routes.forEach((route) => {
  route.path = `/${route.path}`;
});

export default routes;
