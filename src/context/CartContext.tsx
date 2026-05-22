import React, { PropsWithChildren } from "react";

type CartContextType = {
  cart: Record<string, number>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
};

const CartContext = React.createContext<CartContextType | undefined>(undefined);
export type { CartContextType };

export function CardProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = React.useState<Record<string, number>>({});

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
