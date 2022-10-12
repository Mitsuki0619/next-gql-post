import { Avatar, Box, Flex, IconButton, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { FaRegCommentDots } from 'react-icons/fa'
import { MdFavoriteBorder, MdIosShare } from 'react-icons/md'
import { PostMenu } from '@/components/PostMenu/PostMenu'

export const PostItem = React.forwardRef(function PostItem(props, ref) {
    return (
        <Box>
            <Flex
                direction={'column'}
                px={'4'}
                pt={'4'}
                pb={'2'}
                borderTop={'1px'}
                borderColor={'gray.300'}
                cursor={'pointer'}
            >
                <Flex gap={'2.5'}>
                    <Avatar
                        size={{ base: 'sm', sm: 'md' }}
                        src={''}
                        name={'test'}
                    />
                    <Flex direction={'column'} gap={'2'}>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Flex gap={'2'}>
                                <NextLink href={'/'}>
                                    <Link>
                                        <Text
                                            fontSize={{ base: 'md', sm: 'lg' }}
                                            fontWeight={'bold'}
                                        >
                                            テストユーザー
                                        </Text>
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
                            <PostMenu />
                        </Flex>
                        <Text>
                            これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。
                            これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。
                            これはダミーテキストです。
                        </Text>
                        <Flex justifyContent={'space-between'}>
                            <Flex
                                flexGrow={'1'}
                                alignItems={'center'}
                                color={'gray.500'}
                            >
                                <IconButton
                                    bgColor={'transparent'}
                                    icon={<FaRegCommentDots />}
                                    aria-label={'comment'}
                                    fontSize={'24'}
                                />
                                <Text fontSize={'md'}>6</Text>
                            </Flex>
                            <Flex
                                flexGrow={'1'}
                                alignItems={'center'}
                                color={'gray.500'}
                            >
                                <IconButton
                                    bgColor={'transparent'}
                                    icon={<MdFavoriteBorder />}
                                    aria-label={'like'}
                                    fontSize={'24'}
                                />
                                <Text fontSize={'md'}>129</Text>
                            </Flex>
                            <Flex
                                flexGrow={'1'}
                                alignItems={'center'}
                                color={'gray.500'}
                            >
                                <IconButton
                                    bgColor={'transparent'}
                                    icon={<MdIosShare />}
                                    aria-label={'share'}
                                    fontSize={'24'}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
})
