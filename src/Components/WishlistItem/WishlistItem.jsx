import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredWishList, addToStoredWishList } from "../../utility/addToDb";

const WishlistItem = () => {
  const data = useLoaderData();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    console.log("Stored Wishlist:", storedWishList);

    const storedWishlistItems = data.filter((item) =>
      storedWishList.includes(item.product_id.toString())
    );
    console.log("Stored Wishlist Items:", storedWishlistItems);

    setWishlistItems(storedWishlistItems); 
  }, [data]);

  const handleAddToWishlist = (productId) => {
    addToStoredWishList(productId);
    const updatedWishList = getStoredWishList();
    const updatedWishlistItems = data.filter((item) =>
      updatedWishList.includes(item.product_id.toString())
    );
    setWishlistItems(updatedWishlistItems);
    console.log("Updated Wishlist Items:", updatedWishlistItems);
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-center rounded-lg py-14">
        <h2 className="text-4xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we have it all!
          </small>
        </p>
        <Link to='/cartItem' className="btn btn-sm mr-5">Cart</Link>
        <button className="btn btn-sm">Wishlist</button>
      </div>
      <h2 className="font-bold">Wishlist</h2>
      <div className="px-10">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
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
              <div className="my-auto py-2">
                <p className="font-bold mb-3">{item.product_title}</p>
                <p className="text-gray-500 mb-3">
                  <small>{item.description}</small>
                </p>
                <p className="font-medium mb-3">Price: ${item.price}</p>
                <button
                  onClick={() => handleAddToWishlist(item.product_id)}
                  className="btn btn-sm bg-[#9538E2] text-white rounded-full"
                >
                  Add to Cart
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

export default WishlistItem;
