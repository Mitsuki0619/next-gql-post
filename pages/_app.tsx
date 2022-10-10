import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const theme = extendTheme({
    fonts: {
        heading: 'Noto Sans JP, sans-serif',
        body: 'Noto Sans JP, sans-serif',
    },
})

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </RecoilRoot>
    )
}

export default App
