import { lazy } from "react";

// Import The Page
const Home = lazy(() => import("../../pages/Home/Home"));
const Lihatproduk = lazy(() => import("../../pages/Home/Lihatproduk"));
const Kota = lazy(() => import("../../pages/Home/Kota"));

// Routing
const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "lihatproduk/:id",
    name: "lihat",
    component: Lihatproduk,
  },
  {
    path: "kota/:id",
    name: "kota",
    component: Kota,
  },
];

routes.forEach((route) => {
  route.path = `/${route.path}`;
});

export default routes;
