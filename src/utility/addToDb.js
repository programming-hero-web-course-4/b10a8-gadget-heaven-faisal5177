
import { toast } from "react-toastify";

const getStoredCartList = () => {
  const storedCartListStr = localStorage.getItem('cart-list');
  return storedCartListStr ? JSON.parse(storedCartListStr) : [];
}

const addToStoredCartList = (id) => {
  const storedCartList = getStoredCartList();
  if (!storedCartList.includes(id)) {
      storedCartList.push(id);
      localStorage.setItem('cart-list', JSON.stringify(storedCartList));
      toast('This item is added to your cart.');
  } else {
      console.log(id, 'already exists in the cart list');
  }
}

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem('wish-list');
  return storedWishListStr ? JSON.parse(storedWishListStr) : [];
}

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (!storedWishList.includes(id)) {
    storedWishList.push(id);
    localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    toast('This item is added to your wishlist.');
  } else {
      console.log(id, 'already exists in the wish list');
  }
}

const addToCart = (productId) => {
  const cart = getStoredCartList();
  if (!cart.includes(productId)) {
    cart.push(productId);
    toast('This item has been added to your cart.');
  } else {
    toast('This item is already in your cart.');
  }
};

const removeFromCart = (productId) => {
  const cartList = getStoredCartList();
  const updatedCartList = cartList.filter(id => id !== productId);
  localStorage.setItem('cart-list', JSON.stringify(updatedCartList)); 
};

const removeFromWishlist = (productId) => {
  const wishlist = getStoredWishList();
  const updatedWishlist = wishlist.filter(id => id !== productId);
  localStorage.setItem('wish-list', JSON.stringify(updatedWishlist)); 
};

export { addToCart, addToStoredCartList , addToStoredWishList, getStoredCartList, getStoredWishList, removeFromCart, removeFromWishlist };
