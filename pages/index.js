import { Box, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <Box>
      <Text fontSize="2xl">{t('welcome')}</Text>
      <Text fontSize="2xl">Bem-vindo à página Home</Text>
      <Text fontSize="2xl">O número de clientes</Text>
      <Text fontSize="2xl">Estar de bem com os outros</Text>
      <Text fontSize="2xl">Quantos cachorros tem no mundo?</Text>
      <Text fontSize="2xl">Qual o tempo hoje?</Text>
    </Box>
  )
}
