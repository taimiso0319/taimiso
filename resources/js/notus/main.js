import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";


// mouting point for the whole app

import App from "@/App";

// layouts

import Admin from "@/layouts/Admin";
import Auth from "@/layouts/Auth";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard";
import Settings from "@/views/admin/Settings";
import Tables from "@/views/admin/Tables";
import Maps from "@/views/admin/Maps";

// views for Auth layout

import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

// views without layouts

import Landing from "@/views/Landing";
import Profile from "@/views/Profile";
import Index from "@/views/Index";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
