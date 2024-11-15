import React from "react";
import { Link } from 'react-router-dom'; // <-- Add this import

const Dashboard = () => {
  return (
    <div>
      <div className="text-center border rounded-lg bg-[#9538E2] py-14">
        <h2 className="text-4xl text-white font-bold">Dashboard</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </small>
        </p>
        <div>
          <Link to="/cartItem">
            <button className="btn mr-5 font-bold">Cart</button>
          </Link>
          <Link to='wishlistItem'>
            <button className="btn font-bold">Wishlist</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
