import React from "react";
import { Outlet } from "react-router";
import LeftAside from "../components/LeftAside/LeftAside";
import RightAside from "../components/RightAside/RightAside";
import NewsArea from "../components/NewsArea/NewsArea";
import { Suspense } from "react";

const NewsSection = () => {
  return (
    <>
      <main className="grid grid-cols-12 gap-1 my-4">
        <aside className="col-span-3 sticky top-20 h-fit">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <LeftAside />
          </Suspense>
        </aside>
        <section className="news-content col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-20 h-fit">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default NewsSection;
