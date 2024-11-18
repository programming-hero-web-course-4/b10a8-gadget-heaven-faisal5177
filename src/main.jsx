import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
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

const fetchCategories = async () => {
  try {
    const response = await fetch('/CategoriesData.json');
    if (!response.ok) {
      throw new Error('Failed to fetch categories data.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cartItem", element: <CartItem />, loader: fetchCategories },
      { path: "cart", element: <Navigate to="/cartItem" replace /> },
      { path: "wishlist", element: <Navigate to="/wishlistItem" replace /> },
      { path: "wishlistItem", element: <WishlistItem />, loader: fetchCategories },
      { path: "dashboard", element: <Dashboard /> },
      { path: "statistics", element: <Statistics /> },
      { path: "categories", element: <Categories />, loader: fetchCategories },
      { path: "category/:product_id", element: <ProductDetails />, loader: fetchCategories },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
