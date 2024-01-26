import Link from 'next/link'
import { Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Select } from '@chakra-ui/react'

export default function Navbar() {
  const router = useRouter();
  
  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    console.log('locale::', locale, router.pathname, router.asPath)
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Link href="/" passHref><Button>Home</Button></Link>
      <Link href="/about" passHref><Button>About</Button></Link>
      <Link href="/prices" passHref><Button>Prices</Button></Link>
      <Link href="/catalogue" passHref><Button>Catalogue</Button></Link>
      <Select onChange={handleLanguageChange} defaultValue={router.locale}>
        <option value="pt">PT</option>
        <option value="en">EN</option>
      </Select>
    </Box>
  )
}
