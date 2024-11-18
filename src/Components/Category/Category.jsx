import { Link } from "react-router-dom";

const Category = ({ category }) => {
  if (!category || !category.product_id) {
    return <div>Invalid product data</div>;
  }

  const { product_id, product_title, product_image, price } = category;

  const formattedPrice = typeof price === "number" ? price.toFixed(2) : price;

  return (
    <Link to={`/category/${product_id}`} className="category-link">
      <div className="category-card shadow-xl p-4 border rounded-xl hover:shadow-2xl transition-shadow duration-200">
        <figure className="flex justify-center mb-4">
          <img
            className="p-3 h-48  object-cover bg-white rounded-xl"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="product_title text-lg font-bold mb-2">{product_title}</h2>
          <p className="text-gray-500 text-lg mb-4">Price: ${formattedPrice}</p>
          <div className="text-center">
            <button className="btn text-[#9538E2] rounded-2xl border-[#9538E2] w-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
