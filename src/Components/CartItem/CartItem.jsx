import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, removeFromCart, addToStoredCartList } from "../../utility/addToDb";
import { AiOutlineSliders } from "react-icons/ai";
import GroupImg from "../../assets/images/Group.png";

const CartItem = () => {
  const data = useLoaderData();
  const [cartItems, setCartItems] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const storedCartList = getStoredCartList();
      const storedCartItems = data.filter((item) => storedCartList.includes(item.product_id.toString()));
      setCartItems(storedCartItems);
    }
  }, [data]);

  const handleAddToCart = (productId) => {
    addToStoredCartList(productId);
    const updatedCartList = getStoredCartList();
    const updatedCartItems = data.filter((item) => updatedCartList.includes(item.product_id.toString()));
    setCartItems(updatedCartItems);
    navigate("/cart");
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    const updatedCartList = getStoredCartList();
    const updatedCartItems = data.filter((item) => updatedCartList.includes(item.product_id.toString()));
    setCartItems(updatedCartItems);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handleButtonClick = (button) => {
    setActiveButton(button);

    if (button === "sort") {
      const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
      setCartItems(sortedItems);
    } else if (button === "purchase") {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="text-center border rounded-lg bg-[#9538E2] py-14 mb-5">
        <h2 className="text-4xl text-white font-bold">Dashboard</h2>
        <p className="text-gray-200 mb-5">Explore the latest gadgets that will take your experience to the next level.</p>
        <div>
          <button
            onClick={() => handleButtonClick("cart")}
            className={`btn btn-sm mr-5 ${activeButton === "cart" ? "bg-gradient-to-r from-[#9538E2] to-transparent text-white" : "bg-white text-[#9538E2] border-[#9538E2]"}`}
          >
            Cart
          </button>
          <Link to="/wishlistItem">
            <button
              onClick={() => handleButtonClick("wishlist")}
              className={`btn btn-sm mr-5 ${activeButton === "wishlist" ? "bg-gradient-to-b from-pink-500 from-10% text-white" : "bg-white text-[#9538E2] border-[#9538E2]"}`}
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
            <p className="font-bold md:mr-5 lg:mr-20">Total cost: ${totalCost}</p>
            <div>
              {/* Sort by Price button */}
              <button
                onClick={() => handleButtonClick("sort")}
                className={`btn btn-sm mr-3 rounded-full ${activeButton === "sort" ? "bg-pink-400 bg-gradient-to-b from-[#9538E2] from-70% text-white" : "bg-white text-[#9538E2] border-[#9538E2]"}`}> 
                Sort by Price <AiOutlineSliders />
              </button>
              {/* Purchase button */}
              <button
                onClick={() => handleButtonClick("purchase")}
                className={`btn btn-sm rounded-full ${activeButton === "purchase" ? "bg-pink-400 bg-gradient-to-b from-[#9538E2] from-70% text-white" : "bg-white text-[#9538E2] border-[#9538E2]"}`}> 
                Purchase
              </button>
            </div>
          </div>
        </div>

        {/* Render cart items */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.product_id} className="border rounded-xl flex px-5 py-2 gap-6 mt-10 shadow-xl justify-between">
              <div className="flex">
                <div className="my-auto p-3">
                  <img className="w-[150px]" src={item.product_image} alt={item.product_title} />
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
                  className="btn btn-circle btn-xs border-red-500 text-red-500 bg-white mt-5 mr-20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>

      {/* Modal for payment confirmation */}
      {isModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle lg:w-1/3 h-2/3 mx-auto">
          <div className="modal-box text-center">
            <img className="mx-auto mb-5" src={GroupImg} alt="Success" />
            <h3 className="font-bold text-lg">Payment Successful</h3>
            <p className="py-4 text-gray-400">Thanks for purchasing!</p>
            <p className="text-gray-400 mb-5">Total: ${totalCost}</p>
            <button className="btn mx-auto px-20 border-[#9538E2] text-[#9538E2] font-bold rounded-full hover:bg-[#9538E2] hover:text-white" onClick={closeModal}>
              Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CartItem;
