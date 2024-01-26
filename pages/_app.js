import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import { IntlProvider } from 'next-intl';
import intlConfig from '../next-intl.config';

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider 
      messages={pageProps.messages}   
      timeZone={intlConfig.timeZone}
    > 
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </IntlProvider>
  )
}

MyApp.getInitialProps = async (context) => {
  const { locale } = context.router;
  const messages = await import(`../messages/${locale}.json`).then((m) => m.default);

  return {
    pageProps: {
      messages
    }
  };
};

export default MyApp;