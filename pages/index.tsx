import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '@/components/Layouts/Layout'

const Home: NextPage = () => {
    return (
        <Layout>
            <Box flexGrow={1}>
                <Flex as={'main'}></Flex>
            </Box>
        </Layout>
    )
}

export default Home
