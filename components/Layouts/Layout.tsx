import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Flex w="100vw" h="100vh" bgColor="gray.100">
            <Header />
            <Flex as="main" grow={1} minW={'xl'}>
                {children}
            </Flex>
            <Footer />
        </Flex>
    )
}
