import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";


// mouting point for the whole app

import App from "@/notus/App";

// layouts
/*
import Admin from "@/notus/layouts/Admin";
import Auth from "@/notus/layouts/Auth";

// views for Admin layout

import Dashboard from "@/notus/views/admin/Dashboard";
import Settings from "@/notus/views/admin/Settings";
import Tables from "@/notus/views/admin/Tables";
import Maps from "@/notus/views/admin/Maps";

// views for Auth layout

import Login from "@/notus/views/auth/Login";
import Register from "@/notus/views/auth/Register";
*/
// views without layouts

import Landing from "@/notus/views/Landing";
import Profile from "@/notus/views/Profile";
import Index from "@/notus/views/Index";

// routes

const routes = [
/*
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
*/
/*  {
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
 */
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile/:id(\\d+)",
    component: Profile,
    props: true,
  },
  {
    path: "/",
    redirect: "/landing",
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
