import Link from 'next/link';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  
  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Link href="/" passHref><Button>Home</Button></Link>
      <Link href="/about" passHref><Button>About</Button></Link>
      <Link href="/prices" passHref><Button>Prices</Button></Link>
      <Link href="/catalogue" passHref><Button>Catalogue</Button></Link>
      <select onChange={handleLanguageChange} defaultValue={router.locale}>
        <option value="pt">PT</option>
        <option value="en">EN</option>
      </select>
    </Box>
  )
}
