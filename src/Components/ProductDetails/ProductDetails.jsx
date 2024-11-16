import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredCartList,
  addToStoredWishList,
} from "../../utility/addToDb";

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  console.log("Loaded Data:", data); 

 
  const category = data.find((item) => item.product_id === product_id);

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };

  const handleAddToWishlist = (id) => {
    addToStoredWishList(id);
  };

  if (!category) {
    return <p>Product not found.</p>; 
  }

  console.log("Selected Category:", category); 

  return (
    <div className="mb-96">
      <div className="text-center border rounded-lg bg-[#9538E2] py-14">
        <h2 className="text-4xl font-bold text-white mb-5">Product Details</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </small>
        </p>
      </div>

      <div>
        <div className="grid grid-cols-2 -mt-10 lg:h-[450px] border rounded-lg mx-auto lg:w-2/3 px-3 gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white p-2">
          <div className="my-auto">
            <figure>
              <img
                className="rounded-lg object-cover mx-auto lg:max-w-80 p-4 bg-white my-auto"
                src={category.product_image}
                alt={category.product_title}
              />
            </figure>
          </div>

          <div>
            <h2 className="card-title font-bold lg:mb-3">
              {category.product_title}
            </h2>
            <p className="lg:mb-3">Price: ${category.price}</p>

            <div className="mr-auto">
              <button className="btn btn-sm rounded-xl px-4 bg-[#309C081A] border-[#3862281a] lg:mb-3">
                <small className="text-[#309C08]">In Stock</small>
              </button>
            </div>

            <p className="lg:mb-3">
              <small className="text-gray-500">{category.description}</small>
            </p>

            <h5 className="font-bold">Specification:</h5>
            {category &&
            category.specification &&
            category.specification.length > 0 ? (
              category.specification.map(
                (
                  spec,
                  index
                ) => (
                  <p className="text-gray-500" key={index}>
                    <small>
                      {index + 1}. {spec}
                    </small>
                  </p>
                )
              )
            ) : (
              <p className="text-gray-400">
                <small>No specifications available.</small>
              </p>
            )}

            <div className="rating rating-sm mb-2 mt-2 flex">
              <div className="flex">
                <div>
                  <div className="flex">
                    <div>
                      <p className="font-bold lg:mb-3">Rating:</p>
                    </div>
                    <div className="mt-1 ml-1">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-gradient-to-r from-yellow-200 to-orange-400 "
                      />
                    </div>
                  </div>
                  {[...Array(5)].map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={index < category.rating}
                    />
                  ))}
                </div>
                <div className="mt-8 ml-2">
                  <span className="btn btn-xs  rounded-full -mt-2">
                    <p className="text-smpl-2">{category.rating}</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="flex"
                onClick={() => handleAddToCart(product_id)}
              >
                <small className="btn btn-sm text-[#9538E2] rounded-2xl border-[#9538E2]">
                  Add To Cart
                  <TiShoppingCart />
                </small>
              </button>

              <button
                className="btn btn-sm rounded-full"
                onClick={() => handleAddToWishlist(product_id)}
              >
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
