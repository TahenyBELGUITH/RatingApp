"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}

interface ProductContextProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  setRatingFilter: (rating: number) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products?.filter(
    (product) => product?.rating >= ratingFilter
  );

  return (
    <ProductContext.Provider
      value={{ products: filteredProducts, loading, error, setRatingFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductProvider");
  return context;
};
