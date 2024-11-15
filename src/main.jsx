import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Categories from './Components/Categories/Categories'; 
import CartItem from './Components/CartItem/CartItem';
import WishlistItem from './Components/WishlistItem/WishlistItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cartItem",
        element: <CartItem />,
        loader: () => fetch('/CategoriesData.json').then(res => res.json()),
      },
      {
        path: "wishlistItem",
        element: <WishlistItem />,
        loader: () => fetch('/CategoriesData.json').then(res => res.json()),
      },
      
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "categories",
        element: <Categories />,
        loader: () => fetch('/CategoriesData.json').then(res => res.json()),
      },
      {
        path: "category/:product_id",
        element: <ProductDetails />,
        loader: () => fetch('/CategoriesData.json'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
