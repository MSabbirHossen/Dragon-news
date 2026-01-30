import React from "react";
import NewsSection from "../../layouts/NewsSection";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to Dragon News Home Page</h1>
      <p className="mt-4 text-lg"> 
        This is the home page of the Dragon News application. Use the navigation
        menu to explore different news categories and stay updated with the latest
        news articles.
      </p>
    </div>
  );
};

export default Home;
