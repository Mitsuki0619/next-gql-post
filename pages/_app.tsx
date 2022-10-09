// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

const theme = extendTheme({
    fonts: {
        heading: 'Noto Sans JP, sans-serif',
        body: 'Noto Sans JP, sans-serif',
    },
})

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
