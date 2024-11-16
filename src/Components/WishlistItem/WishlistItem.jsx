import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  getStoredWishList,
  addToStoredWishList,
  addToCart,
  removeFromWishlist,
} from "../../utility/addToDb";

const WishlistItem = () => {
  const data = useLoaderData();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [activeButton, setActiveButton] = useState("wishlist");

  useEffect(() => {
    const storedWishList = getStoredWishList();
    console.log("Stored Wishlist:", storedWishList);

    const storedWishlistItems = data.filter((item) =>
      storedWishList.includes(item.product_id.toString())
    );
    console.log("Stored Wishlist Items:", storedWishlistItems);

    setWishlistItems(storedWishlistItems);
  }, [data]);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    const updatedWishlist = getStoredWishList();
    const updatedWishlistItems = data.filter((item) =>
      updatedWishlist.includes(item.product_id.toString())
    );
    setWishlistItems(updatedWishlistItems);
    console.log("Updated Wishlist Items after removal:", updatedWishlistItems);
  };

  const handleAddToWishlist = (productId) => {
    addToStoredWishList(productId);
    const updatedWishList = getStoredWishList();
    const updatedWishlistItems = data.filter((item) =>
      updatedWishList.includes(item.product_id.toString())
    );
    setWishlistItems(updatedWishlistItems);
    console.log("Updated Wishlist Items:", updatedWishlistItems);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-center rounded-lg py-14">
        <h2 className="text-4xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </small>
        </p>
        <Link
          to="/cartItem"
          onClick={() => handleButtonClick("cart")}
          className={`btn btn-sm mr-5 ${
            activeButton === "cart"
              ? "bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
              : "bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
          }`}
        >
          Cart
        </Link>
        <button
          onClick={() => handleButtonClick("wishlist")}
          className={`btn btn-sm mr-5 text-[#9538E2] ${
            activeButton === "wishlist"
              ? "bg-[#9538E2] text-white hover:bg-[#9538E2] hover:text-white"
              : "bg-[#9538E2] text-white hover:bg-[#9538E2] hover:text-white"
          }`}
        >
          Wishlist
        </button>
      </div>
      <h2 className="font-bold">Wishlist</h2>
      <div className="px-10">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item.product_id}>
             <div className=" border rounded-xl flex px-5 py-2 gap-6 mt-10 shadow-xl justify-between">
             <div className="flex">
                <div className="my-auto p-3">
                  <img
                    className="w-[150px]"
                    src={item.product_image}
                    alt={item.product_title}
                  />
                </div>
                <div className="my-auto py-2">
                  <p className="font-bold mb-3">{item.product_title}</p>
                  <p className="text-gray-500 mb-3">
                    <small>{item.description}</small>
                  </p>
                  <p className="font-medium mb-3">Price: ${item.price}</p>
                  <Link
                    to="/cartItem"
                    className="flex"
                    onClick={() => handleAddToCart(item.product_id)}
                  >
                    <small className="btn btn-sm rounded-2xl text-white bg-[#9538E2] hover:bg-white hover:text-[#9538E2]">
                      Add To Cart
                    </small>
                  </Link>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleRemoveFromWishlist(item.product_id)}
                  className="btn btn-circle btn-xs border-red-500 text-red-500 bg-white mt-5 mr-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
             </div>
            </div>
          ))
        ) : (
          <p>No items available!</p>
        )}
      </div>
    </div>
  );
};

export default WishlistItem;
