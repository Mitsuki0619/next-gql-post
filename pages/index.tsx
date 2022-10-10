import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '@/components/Layouts/Layout'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import { PostForm } from '@/components/PostForm/PostForm'
import { PostList } from '@/components/PostList/PostList'

const Home: NextPage = () => {
    return (
        <Layout>
            <Box w={'full'}>
                <Flex
                    as={'main'}
                    direction={'column'}
                    overflow={'auto'}
                    h={'full'}
                    w={'full'}
                    gap={'3'}
                >
                    <PageTitle title="ホーム" />
                    <PostForm />
                    <PostList />
                </Flex>
            </Box>
        </Layout>
    )
}

export default Home
