import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "@/components/pages/MainComponent";
const Store = () => import("@/components/pages/Store");
const Product = () => import("@/components/pages/ProductPage");
const Cart = () => import("@/components/pages/Cart");
const Auth = () => import("@/components/pages/Auth");
const Registration = () => import("@/components/pages/Registration");
const OrderedProducts = () => import("@/components/pages/OrderedProducts");
const routes = [
  {
    path: "/",
    component: MainComponent,
    name: "main",
  },
  {
    path: "/store",
    component: Store,
    name: "store",
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
  },
  {
    path: "/product/:id",
    component: Product,
    name: "product",
  },
  {
    path: "/auth",
    component: Auth,
    name: "auth",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next();
      } else {
        next({ name: "main" });
      }
    },
  },
  {
    path: "/registration",
    component: Registration,
    name: "registration",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next();
      } else {
        next({ name: "main" });
      }
    },
  },
  {
    path: "/ordered_products",
    component: OrderedProducts,
    name: "ordered products",
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("user"))) {
        if (JSON.parse(localStorage.getItem("user")).roles == "ADMIN") {
          next();
        }
      } else {
        next({ name: "main" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
