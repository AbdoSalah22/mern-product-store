import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';


const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }
  , [fetchProducts]);
  console.log("Products", products);

  return (
    <Container
      maxW={"container.lg"}
      py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}>
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={8}
          w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize='xl' textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No products available.{" "}
          <Link to={"/create"}>
          <Text as={"span"} color={"blue.500"} _hover={{textDecoration: "underline"}}> Create a new product</Text>
          </Link>
        </Text>)}
      </VStack>
    </Container>
  )
}

export default HomePage