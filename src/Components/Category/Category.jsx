import { Link } from "react-router-dom";

const Category = ({ category }) => {
  if (!category || !category.product_id) {
    return <div>Invalid product data</div>;
  }

  const { product_id, product_title, product_image, price } = category;

  const formattedPrice = typeof price === "number" ? price.toFixed(2) : price;

  return (
    <Link to={`/category/${product_id}`} className="category-link">
      <div className="category-card max-w-sm shadow-xl p-2 mx-auto border rounded-xl my-auto hover:shadow-2xl transition-shadow duration-200">
        <figure>
          <img
            className="h-[166px] mx-auto my-auto p-2 bg-white object-cover"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="product_title text-lg font-bold">{product_title}</h2>
          <p className="text-gray-500 text-lg">Price: ${formattedPrice}</p>
          <div>
            <button className="btn text-[#9538E2] rounded-2xl border-[#9538E2]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
