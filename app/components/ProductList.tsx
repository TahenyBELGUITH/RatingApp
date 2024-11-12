import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="4">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          thumbnail={product.thumbnail}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
