import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from './ui/color-mode'

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const bg = useColorModeValue("white", "gray.800");
    return (
        <Box
            m={2}
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            _hover={{
                transform: "scale(1.05)",
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
            </Box>
        </Box>
    )
}

export default ProductCard