import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp