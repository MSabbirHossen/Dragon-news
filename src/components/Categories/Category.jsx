import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsSection from "../../layouts/NewsSection";
import NewsCard from "../NewsArea/NewsCard";

const Category = () => {
  const [categoryNews, setCategoryNews] = React.useState([]);
  const parameters = useParams();
  const data = useLoaderData();
  // console.log(parameters, data);
  const { id } = parameters;

  useEffect(() => {
      // Perform any data fetching or side effects here if needed
      // const categoryData = data.find(category => category.id == id);
      // console.log('Category Data:', categoryData);
  
      //     const filteredNews = data.filter(newsItem => newsItem.category_id == id);
      //     console.log('Filtered News:', filteredNews);
      // }, [ data, id ]);

    if (id === "0") {
      setCategoryNews(data);
      return;
    } else if (id === "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
    //   console.log("Filtered News:", filteredNews);
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
    //   console.log("Filtered News:", filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      
      <h2 className="font-bold">Total <span className="text-secondary">{categoryNews.length}</span> news found.</h2>

      <div className="grid grid-col-1">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))} 
      </div>
    </div>
  );
};

export default Category;
