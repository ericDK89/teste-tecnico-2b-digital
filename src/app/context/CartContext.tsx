import {createContext, ReactNode, useState} from 'react';

type CartContextProps = {
    cart: ProductProps[],
    addToCart: (product: ProductProps) => void,
    removeFromCart: (productId: string) => void,
    total: number,
    clearCart: () => void,
    increaseQuantity: (productId: string) => void,
    decreaseQuantity: (productId: string) => void,
    handleSetProduct: (product: ProductProps) => void,
    product: ProductProps,
}

export type ProductProps = {
    id: string,
    name: string,
    price: number,
    images: {
        showcase: string,
        productPage: string
    },
    sizes: string[],
    promotionOffer?: number,
    oldPrice?: number,
    numberOfInstallments?: number,
    installmentPrice?: number,
    category: 'unmissableOffers' | 'bestSales' | 'releases',
    categoryId: 2 | 2 | 3,
    tags: string[],
    quantity: number,
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [product, setProduct] = useState({} as ProductProps);
  const [cart, setCart] = useState<ProductProps[]>([]);

  const handleSetProduct = (product: ProductProps) => {
    setProduct(product);
  };

  const addToCart = (product: ProductProps) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? {...p, quantity: p.quantity + 1} : p
        );
      }
      return [...prevCart, {...product, quantity: 1}];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ?
        {...product, quantity: product.quantity + 1} :
        product
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ?
          {...product, quantity: product.quantity > 1 ?
            product.quantity - 1 : 1} :
          product
      )
    );
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      total,
      clearCart,
      decreaseQuantity,
      increaseQuantity,
      handleSetProduct,
      product,
    }}>
      {children}
    </CartContext.Provider>
  );
};

