import Link from 'next/link'
import { Box, Button } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-around">
      <Link href="/" passHref><Button>Home</Button></Link>
      <Link href="/about" passHref><Button>About</Button></Link>
      <Link href="/prices" passHref><Button>Prices</Button></Link>
      <Link href="/catalogue" passHref><Button>Catalogue</Button></Link>
    </Box>
  )
}
