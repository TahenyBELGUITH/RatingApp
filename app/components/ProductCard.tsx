import { Box, Image, Text, Stack, Flex } from "@chakra-ui/react";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  rating,
  thumbnail,
}) => {
  const maxLength = 90;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image src={thumbnail} alt={title} borderRadius="md" mb="4" />
      <Stack spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text mb="2">
          {description.length > maxLength
            ? `${description.substring(0, maxLength)}...`
            : description}
        </Text>
        <Flex justify="space-between">
          <Text>Price: ${price}</Text>
          <Text>Rating: {rating}</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ProductCard;
