import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import LeftAside from "../LeftAside/LeftAside";
import RightAside from "../RightAside/RightAside";
import NewsArea from "../NewsArea/NewsArea";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="text-center mt-20">
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-1 my-4">
        <aside className="col-span-3">
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <LeftAside />
          </Suspense>
        </aside>
        <section className="news-content col-span-6">
          <NewsArea />
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
