import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

// const initialState: ProductType[] = [];
const initialState: ProductType[] = [
  {
      "sku": "item0001",
      "name": "Widget",
      "price": 9.99
  },
  {
      "sku": "item0002",
      "name": "Premium Widget",
      "price": 19.99
  },
  {
      "sku": "item0003",
      "name": "Deluxe Widget",
      "price": 29.99
  }
]

export type UseProductsContextType = { products: ProductType[] };

const initialContextState = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initialContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const response = await fetch("http://localhost:3500/products");
  //     const data = await response.json();
  //     setProducts(data);
  //     return data
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
