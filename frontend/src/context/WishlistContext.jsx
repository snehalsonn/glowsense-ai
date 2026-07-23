import { createContext, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    } else {
      alert("Product is already in your wishlist ❤️");
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}