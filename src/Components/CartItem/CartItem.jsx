import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, addToCart } from "../../utility/addToDb";

const CartItem = ({ CartItem }) => {
  const data = useLoaderData();
  const [cartItem, setCartItems] = useState([]);
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
    navigate("/cart");
  };

  return (
    <div className="">
      <div className="text-center border rounded-lg bg-[#9538E2] py-14">
        <h2 className="text-4xl text-white font-bold">Dashboard</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </small>
        </p>
        <div>
          <button className="btn btn-sm mr-5 font-bold">Cart</button>
          <Link to='/wishlistItem'>
            <button className="btn btn-sm font-bold">Wishlist</button>
          </Link>
        </div>
      </div>
      <div className="px-10">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.product_id}
              className="border rounded-xl flex px-5 py-2 gap-6 mt-10 shadow-xl"
            >
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
          ))
        ) : (
          <p>No items available!</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;