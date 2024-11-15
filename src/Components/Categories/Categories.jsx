import { useState, useEffect } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import Category from "../Category/Category"; // Your Category component
import { Link } from 'react-router-dom';  // Link to handle navigation

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
    <div className="mx-auto px-12">
      <h2 className="text-4xl text-center font-bold mb-20">Explore Cutting-Edge Gadgets</h2>
      <section className="flex gap-6">
        <aside>
          <div className="text-left w-64 border rounded-xl p-10">
            {["All", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Iphone"].map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="btn mb-5 font-bold rounded-full text-lg w-full bg-white hover:bg-[#9538E2] hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl items-center ml-10">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((categoryItem) => (
              <Link to={`/category/${categoryItem.product_id}`} key={categoryItem.product_id}>
                <Category category={categoryItem} />
              </Link>
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
