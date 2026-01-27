import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Status404 from "../components/Error/Status404";
import Category from "../components/Categories/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/category/:id",
    Component: Category,
  },
  {
    path: "*",
    Component: Status404,
  }
]);
