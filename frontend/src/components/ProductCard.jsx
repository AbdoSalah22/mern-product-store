import { Box, Button, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { toaster } from "../components/ui/toaster"
import { useColorModeValue } from './ui/color-mode'
import { MdEdit, MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';


const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteProduct } = useProductStore();
    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        console.log(success, message);
        if (!success) {
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
    }
    return (
        <Box
            m={2}
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
                    <Button colorScheme={"blue"}>
                        <MdEdit />
                    </Button>
                    <Button onClick={() => handleDeleteProduct(product._id)} colorScheme={"red"}>
                        <MdDelete />
                    </Button>
                </HStack>
            </Box>
        </Box>
    )
}

export default ProductCard