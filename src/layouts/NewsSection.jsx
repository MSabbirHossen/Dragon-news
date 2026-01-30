import React from "react";
import { Outlet } from "react-router";
import LeftAside from "../components/LeftAside/LeftAside";
import RightAside from "../components/RightAside/RightAside";
import NewsArea from "../components/NewsArea/NewsArea";
import { Suspense } from "react";
import Header from "../components/Header/Header";

const NewsSection = () => {
  return (
    <>
      <main className="grid grid-cols-12 gap-1 my-4">
        <aside className="col-span-3">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <LeftAside />
          </Suspense>
        </aside>
        <section className="news-content col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default NewsSection;
