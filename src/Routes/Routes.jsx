import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Status404 from "../components/Error/Status404";
import Category from "../components/Categories/Category";
import Header from "../components/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        loader: () => fetch('/news.json'),
        Component: Category,
      },
    ],
  },
  {
    path: "about",
    Component: () => (
      <div>
        <Header /> About Page
        <title>About Us</title>
      </div>
    ),
  },
  {
    path: "career",
    Component: () => (
      <div>
        <Header /> Career Page
        <title>Career</title>
      </div>
    ),
  },
  {
    path: "*",
    Component: Status404,
  },
]);
