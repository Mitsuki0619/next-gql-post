import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { EnvironmentKey, RecoilRelayEnvironmentProvider } from 'recoil-relay'
import environment from '../RelayEnvironment'

const theme = extendTheme({
    fonts: {
        heading: 'Noto Sans JP, sans-serif',
        body: 'Noto Sans JP, sans-serif',
    },
})
const environmentKey = new EnvironmentKey('environment')

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <RecoilRelayEnvironmentProvider
                environment={environment}
                environmentKey={environmentKey}
            >
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </RecoilRelayEnvironmentProvider>
        </RecoilRoot>
    )
}

export default App
