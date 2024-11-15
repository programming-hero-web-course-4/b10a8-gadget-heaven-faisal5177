
import { toast } from "react-toastify";

const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    if (storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if (storedCartList.includes(id)) {
        console.log(id, 'already exists in the caart list')
    }
    else {
        storedCartList.push(id);
        const storedCartListStr = JSON.stringify(storedCartList);
        localStorage.setItem('cart-list', storedCartListStr);
        toast('This book is added to your cartlist.')
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'already exists in the read list')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

const addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(productId)) {
      cart.push(productId);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

export {addToCart , addToStoredCartList, addToStoredWishList, getStoredCartList }
