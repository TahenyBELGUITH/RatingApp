"use client";

import { Container, Heading } from "@chakra-ui/react";

import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";
import RatingFilter from "./components/RatingFilter";

const Home: React.FC = () => {
  return (
    <ProductProvider>
      <Container maxW="container.lg" py="8">
        <Heading mb="6">All Products</Heading>
        <RatingFilter />
        <ProductList />
      </Container>
    </ProductProvider>
  );
};

export default Home;
