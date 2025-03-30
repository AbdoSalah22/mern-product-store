import { Box, Button, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';
import { useState } from 'react';


const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const bg = useColorModeValue("white", "gray.800");

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { deleteProduct, updateProduct } = useProductStore();

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success} = await updateProduct(pid, updatedProduct);
        onClose();
        if(!success){
            toast({
                description: "error!!",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        else{
            toast({
                description: "success!!",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        console.log(success, message);
        if (!success) {
            toast({
                description: "error!!",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        else {
            toast({
                description: "success!!",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }
    }
    return (
        <Box
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all 0.3s"}
            _hover={{
                transform: "scale(1.025)",
                shadow: "xl",
            }}
            bg={bg}>
            <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />

            <Box p={4}>
                <Heading as={"h3"} size={"md"} mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <Button onClick={onOpen} colorScheme={"blue"}>
                        <MdEdit />
                    </Button>
                    <Button onClick={() => handleDeleteProduct(product._id)} colorScheme={"red"}>
                        <MdDelete />
                    </Button>
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input placeholder='Product Name' name='name' value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>
                            <Input placeholder='Price' name='price' type='number' value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}/>
                            <Input placeholder='Image URL' name='image' value={updatedProduct.image}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}/>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                        <Button variant='ghost' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ProductCard;