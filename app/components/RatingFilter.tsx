"use client";

import { useState } from "react";
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useProducts } from "../context/ProductContext";

const RatingFilter: React.FC = () => {
  const { setRatingFilter, products } = useProducts();
  // Track the current slider value
  const [rating, setRating] = useState<number>(0);

  const handleSliderChange = (value: number) => {
    setRating(value);
    // Updating the context filter
    setRatingFilter(value);
  };

  const handleReset = () => {
    // Reset the states locally
    setRating(0);
    // Reset the rating filter in context
    setRatingFilter(0);
  };

  // Check if no products are available after applying the filter
  const isNoProductsAvailable = rating === 5 && products?.length === 0;

  return (
    <Box mb="6">
      <Text mb="2">Filter by Rating:</Text>

      {/* Rating using slider */}
      <Slider
        value={rating}
        defaultValue={0}
        min={0}
        max={5}
        step={0.5}
        onChange={handleSliderChange}
      >
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="red.400" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="red.400" />
        </SliderThumb>
      </Slider>

      {/* Display current rating value */}
      <HStack spacing={4} mt="4">
        <Text>Rating: {rating}</Text>

        {/* To reset button */}
        <Button size="sm" onClick={handleReset}>
          Reset
        </Button>
      </HStack>

      {/* Rating using dropdown (optional) */}
      {/* <select
        id="rating"
        value={rating}
        onChange={(e) => handleSliderChange(Number(e.target.value))}
      >
        <option value="">Select...</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select> */}

      {/* Show a message if no products are available after filtering by rating 5 */}
      {isNoProductsAvailable && (
        <Text mt="4" color="gray.500" textAlign="center" fontSize={16}>
          No products available with a rating of 5 stars.
        </Text>
      )}
    </Box>
  );
};

export default RatingFilter;
