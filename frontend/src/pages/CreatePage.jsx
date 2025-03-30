import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { toaster } from "../components/ui/toaster"
import React from 'react'
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log(success, message);
    // Toast does not work!! (check documentation)
    if(!success) {
      toaster.create({
        description: "error!!",
        type: "error",
      })
    }
    else {
      toaster.create({
        description: "success!!",
        type: "success",
      })
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create a new product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}>
            <VStack spacing={4} align={"stretch"}>
              <Input
                placeholder="Product name"
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <Input
                placeholder="Product price"
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <Input
                placeholder="Product image URL"
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
              <Button colorScheme={"blue"} onClick={handleAddProduct} w={"full"}>
                Add Product
              </Button>
            </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage