import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/CategoriesData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        const categoriesData = data.map(category => ({
          name: category.product_title,
          price: category.price,
          total: category.total,
          rating: category.rating
        }));
        console.log("Processed categories data:", categoriesData);
        setCategories(categoriesData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const renderLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text x={x + 10} y={y - 5} fill="#000000" fontSize={16} fontWeight="bold" textAnchor="middle">
        {value}
      </text>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center border rounded-lg bg-[#9538E2] py-10">
        <h2 className="text-4xl font-bold text-white">Statistics</h2>
        <p className="text-gray-300 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </small>
        </p>
      </div>
      <h2 className="font-bold mb-5 mt-5">Statistics</h2>
      <div className="px-10">
        <div className="border rounded-xl shadow-xl bg-white p-5 py-10">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categories}>
              <Bar dataKey="price" fill="#9538E2" className="rounded-xl" barSize={70}/>
              <Bar dataKey="total" fill="#BF87EE" className="rounded-xl" barSize={70}/>
              <Bar dataKey="rating" fill="#FF0000" className="rounded-xl" barSize={70}/>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
