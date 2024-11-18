import React, { useState, useEffect } from 'react';
import ErrorPage from "../ErrorPage/ErrorPage";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const unavailableCategories = ["Smart Watches"];

  useEffect(() => {
    fetch("/CategoriesData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
          setFilteredCategories(data);
        } else {
          console.error("Data is not an array:", data);
          setCategories([]);
          setFilteredCategories([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setShowErrorPage(true);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredCategories(categories);
    } else if (unavailableCategories.includes(category)) {
      setShowErrorPage(`${category} category is currently unavailable.`);
      setFilteredCategories([]);
    } else {
      const filtered = categories.filter(
        (categoryItem) => categoryItem.category === category
      );
      setFilteredCategories(filtered);
    }
  };

  if (showErrorPage) {
    return <ErrorPage message={showErrorPage} />;
  }

  return (
    <div className="mx-auto px-10">
      <h2 className="text-4xl text-center -mt-10 font-bold mb-10">
        Explore Cutting-Edge Gadgets
      </h2>
      <section className="flex gap-6">
        <div className="lg:w-64 w-full text-left mb-6">
          <div className="grid text-left lg:w-full lg:border rounded-2xl lg:p-5">
            {["All", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Iphone"].map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="btn lg:btn-lg mb-5 font-bold rounded-full lg:text-lg bg-white hover:bg-[#9538E2] hover:text-white px-5"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full gap-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 rounded-xl items-center ml-10">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((categoryItem) => (
              <Category key={categoryItem.product_id} category={categoryItem} />
            ))
          ) : (
            <p>No categories available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Categories;
