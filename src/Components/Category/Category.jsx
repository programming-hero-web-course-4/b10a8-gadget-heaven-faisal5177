import { Link } from "react-router-dom";

const Category = ({ category }) => {
  if (!category || !category.product_id) {
    return <div>Invalid product data</div>;
  }

  const { product_id, product_title, product_image, price } = category;
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : price;

  return (
    <Link to={`/category/${product_id}`} className="category-link">
      <div className="category-card shadow-xl border rounded-xl hover:shadow-2xl p-3 transition-shadow duration-200 w-[250px] h-[350px]">
        <figure className="flex border shadow-sm bg-base-10 rounded-2xl justify-center mb-3 h-32">
          <img
            className="p-2 my-auto mx-auto max-h-full max-w-full object-cover  rounded-xl"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="product_title text-lg font-bold -mt-5 mb-2">{product_title}</h2>
          <p className="text-gray-500 mb-3">Price: ${formattedPrice}</p>
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
