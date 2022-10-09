import {
    Avatar,
    Box,
    Flex,
    Heading,
    IconButton,
    Link,
    Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { MdFavoriteBorder, MdIosShare } from 'react-icons/md'

export const PostItem: React.FC = () => {
    return (
        <Box>
            <Flex
                gap={'2.5'}
                px={'4'}
                pt={'4'}
                pb={'2'}
                borderTop={'1px'}
                borderColor={'gray.300'}
                _hover={{ bgColor: 'gray.200' }}
                transition={'all'}
                transitionDuration={'0.3s'}
                cursor={'pointer'}
            >
                <Avatar
                    size={{ base: 'sm', sm: 'md' }}
                    src={''}
                    name={'test'}
                />{' '}
                <Flex direction={'column'} gap={'2'}>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Flex gap={'2'}>
                            <NextLink href={'/'}>
                                <Link>
                                    <Heading
                                        as={'h4'}
                                        fontSize={{ base: 'md', sm: 'lg' }}
                                    >
                                        テストユーザー
                                    </Heading>
                                </Link>
                            </NextLink>
                            <NextLink href={'/'}>
                                <a>
                                    <Text
                                        fontSize={{ base: '12', sm: '14' }}
                                        color={'gray.500'}
                                    >
                                        @test_user
                                    </Text>
                                </a>
                            </NextLink>
                            <Text
                                fontSize={{ base: '12', sm: '14' }}
                                color={'gray.500'}
                                wordBreak={'keep-all'}
                            >
                                6時間前
                            </Text>
                        </Flex>
                        <IconButton
                            bgColor={'transparent'}
                            icon={<BsThreeDots />}
                            aria-label={'post menu'}
                            fontSize={'24'}
                            color={'gray.500'}
                        />
                    </Flex>
                    <Text>
                        これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。
                        これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。
                        これはダミーテキストです。
                    </Text>
                    <Flex justifyContent={'space-between'}>
                        <Box flexGrow={'1'}>
                            <IconButton
                                bgColor={'transparent'}
                                icon={<FaRegCommentDots />}
                                aria-label={'comment'}
                                fontSize={'24'}
                                color={'gray.500'}
                            />
                        </Box>
                        <Box flexGrow={'1'}>
                            <IconButton
                                bgColor={'transparent'}
                                icon={<MdFavoriteBorder />}
                                aria-label={'like'}
                                fontSize={'24'}
                                color={'gray.500'}
                            />
                        </Box>
                        <Box flexGrow={'1'}>
                            <IconButton
                                bgColor={'transparent'}
                                icon={<MdIosShare />}
                                aria-label={'share'}
                                fontSize={'24'}
                                color={'gray.500'}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
