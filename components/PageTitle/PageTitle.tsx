import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

interface PageTitleProps {
    title: string
}
export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <Box
            position={'sticky'}
            top={0}
            backdropFilter={'auto'}
            backdropBlur={'8px'}
            zIndex={'10'}
        >
            <Flex px={'4'} alignItems={'center'} h={'14'}>
                <Heading as={'h2'} fontSize={'24px'}>
                    {title}
                </Heading>
            </Flex>
        </Box>
    )
}
