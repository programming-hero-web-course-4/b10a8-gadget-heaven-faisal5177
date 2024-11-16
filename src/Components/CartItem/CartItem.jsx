import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, addToCart, removeFromCart } from "../../utility/addToDb"; 
import { AiOutlineSliders } from "react-icons/ai";

const CartItem = () => {
  const data = useLoaderData();
  const [cartItems, setCartItems] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartList = getStoredCartList();
    console.log("Stored Cart List:", storedCartList);

    const storedCartItems = data.filter((item) =>
      storedCartList.includes(item.product_id.toString())
    );
    console.log("Stored Cart Items:", storedCartItems);

    setCartItems(storedCartItems);
  }, [data]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    const updatedCartList = getStoredCartList();
    const updatedCartItems = data.filter((item) =>
      updatedCartList.includes(item.product_id.toString())
    );
    setCartItems(updatedCartItems);
    console.log("Updated Cart Items:", updatedCartItems);
    navigate("/cart");
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); 
    const updatedCartList = getStoredCartList();
    const updatedCartItems = data.filter((item) =>
      updatedCartList.includes(item.product_id.toString())
    );
    setCartItems(updatedCartItems); 
    console.log("Updated Cart Items after removal:", updatedCartItems);
  };

  const totalCost = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    
    if (button === "sort") {
      const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
      setCartItems(sortedItems);
    }
  };

  return (
    <div>
      <div className="text-center border rounded-lg bg-[#9538E2] py-14 mb-5">
        <h2 className="text-4xl text-white font-bold">Dashboard</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </small>
        </p>
        <div>
          <button
            onClick={() => handleButtonClick("cart")}
            className={`btn btn-sm mr-5 text-[#9538E2] ${
              activeButton === "cart"
                ? "bg-white hover:bg-[#9538E2] hover:text-white"
                : "bg-[#9538E2] text-white hover:bg-[#9538E2] hover:text-white"
            }`}
          >
            Cart
          </button>
          <Link to="/wishlistItem">
            <button
              onClick={() => handleButtonClick("wishlist")}
              className={`btn btn-sm mr-5 ${
                activeButton === "wishlist"
                  ? "bg-white hover:bg-[#9538E2] hover:text-white"
                  : "bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
              }`}
            >
              Wishlist
            </button>
          </Link>
        </div>
      </div>
      <div className="px-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Cart</h2>
          <div className="flex items-center">
            <p className="font-bold mr-20">Total cost: ${totalCost}</p>
            <div>
              <button
                onClick={() => handleButtonClick("sort")}
                className={`btn btn-sm rounded-full ${
                  activeButton === "sort"
                    ? "bg-gradient-to-r from-[#9538E2] via-[#fd00ce] to-[#9538E2] text-white"
                    : "bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
                }`}
              >
                Sort by Price <AiOutlineSliders />
              </button>
              <button
                onClick={() => handleButtonClick("purchase")}
                className={`btn btn-sm ml-5 rounded-full ${
                  activeButton === "purchase"
                    ? "bg-gradient-to-r from-[#9538E2] via-[#fd00ce] to-[#9538E2] text-white"
                    : "bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.product_id}
              className="border rounded-xl flex px-5 py-2 gap-6 mt-10 shadow-xl justify-between"
            >
              <div className="flex">
                <div className="my-auto p-3">
                  <img
                    className="w-[150px]"
                    src={item.product_image}
                    alt={item.product_title}
                  />
                </div>
                <div className="my-auto">
                  <p className="font-bold mb-3">{item.product_title}</p>
                  <p className="text-gray-500 mb-3">
                    <small>{item.description}</small>
                  </p>
                  <p className="font-medium">Price: ${item.price}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleRemoveFromCart(item.product_id)}
                  className="btn btn-circle btn-xs border-red-500 text-red-500 bg-white mt-10 mr-20"
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
          ))
        ) : (
          <p>No items available!</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
