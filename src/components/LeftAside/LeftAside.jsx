import React, { Suspense, use } from "react";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const LeftAside = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      
        <div className="mt-4">
          {categories.map((category) => (
            <p
              key={category.id}
              className="border-b border-gray-300 py-2 text-left hover:text-blue-500 cursor-pointer"
            >
              {category.name}
            </p>
          ))}
        </div>
    </div>
  );
};

export default LeftAside;
