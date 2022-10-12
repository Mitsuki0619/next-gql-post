import {
    Box,
    Flex,
    Heading,
    Link,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { SearchInput } from '@/components/SearchInput/SearchInput'

export const Footer: React.FC = () => {
    return (
        <Flex
            as="footer"
            direction="column"
            bgColor="white"
            w={{ base: '0', sm: '36vw' }}
            h="full"
            overflow="auto"
            pt={'8px'}
            px={{ base: '3', lg: '5' }}
            display={{ base: 'none', sm: 'flex' }}
        >
            <Flex
                direction={'column'}
                w={{ xl: '380px' }}
                gap={'4'}
                display={{ base: 'none', lg: 'flex' }}
            >
                <SearchInput
                    value={''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        console.log(e.target.value)
                    }}
                />
                <Flex direction={'column'} bgColor={'gray.100'} rounded={'2xl'}>
                    <Heading as={'h3'} fontSize={'xl'} p={'4'}>
                        トレンド
                    </Heading>
                    <Wrap direction="column">
                        <WrapItem>
                            <NextLink href={'/'}>
                                <Link
                                    w={'full'}
                                    p={'4'}
                                    _hover={{ bgColor: 'gray.200' }}
                                    transition={'all'}
                                    transitionDuration={'0.3s'}
                                    display={'block'}
                                >
                                    <Heading as={'h4'} fontSize={'lg'}>
                                        トレンドテスト
                                    </Heading>
                                    <Text color={'gray.500'} fontSize={'md'}>
                                        1223件の投稿
                                    </Text>
                                </Link>
                            </NextLink>
                        </WrapItem>
                    </Wrap>
                    <Box
                        flexGrow={'1'}
                        roundedBottom={'2xl'}
                        _hover={{ bgColor: 'gray.200' }}
                        transition={'all'}
                        transitionDuration={'0.3s'}
                    >
                        <NextLink href={''}>
                            <Link
                                w={'full'}
                                h={'full'}
                                color={'teal'}
                                p={4}
                                display={'block'}
                            >
                                さらに表示
                            </Link>
                        </NextLink>
                    </Box>
                </Flex>
                <Text color={'gray'} as={'small'}>
                    &copy; PostApp, Inc, 2022
                </Text>
            </Flex>
        </Flex>
    )
}
