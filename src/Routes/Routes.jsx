import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Status404 from "../components/Error/Status404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "*",
    Component: Status404,
  }
]);
