import { Box, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '@/components/Layouts/Layout'
import { PostForm } from '@/components/PostForm/PostForm'

const Home: NextPage = () => {
    return (
        <Layout>
            <Box flexGrow={1}>
                <Flex as={'main'} direction={'column'}>
                    <Flex
                        px={4}
                        position={'sticky'}
                        top={0}
                        alignItems={'center'}
                        h={14}
                    >
                        <Heading as={'h2'} fontSize={'24px'}>
                            ホーム
                        </Heading>
                    </Flex>
                    <PostForm />
                </Flex>
            </Box>
        </Layout>
    )
}

export default Home
