import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../about/AboutPage";
import { ProfilePage } from "../profile/ProfilePage";
import { LoginPage } from "../auth/LoginPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
   {
    path: "/profile",
    element: <ProfilePage />,
  },
   {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },

]);

