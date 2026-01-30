import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewsSection from "./NewsSection";


const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Root;
