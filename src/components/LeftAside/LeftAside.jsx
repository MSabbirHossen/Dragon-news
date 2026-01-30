import React, { Suspense, use } from "react";
import { NavLink } from "react-router";
import "./LeftAside.css";

const categoryPromise = fetch("/categories.json").then((res) => res.json());


const LeftAside = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>

      <div className="mt-4 grid grid-cols-1 gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="btn btn-ghost hover:text-blue-500 cursor-pointer a-active"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
