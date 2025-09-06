import { Box, BoxProps, Stack, StackProps, Text, Button, useSlotRecipe } from '@chakra-ui/react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const MotionBox = motion(Box)

const IslandOperationsPage = () => {
  const router = useRouter()
  const styles = useSlotRecipe({ key: 'islandOperationsPage' })({}) as Record<string, BoxProps & StackProps>

  return (
    <>
      <Head>
        <title>Island Operations Page</title>
        <meta name="description" content="" />
      </Head>

      <Stack {...styles.container}>
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          bg="black"
          p={10}
          rounded="md"
          maxW="800px"
          mx="auto"
          mt={10}
          textAlign="center"
          shadow="2xl"
          border="3px solid #FF0000"
        >
          <Text
            fontSize="6xl"
            fontWeight="extrabold"
            color="white"
            textShadow="6px 6px 10px black"
          >
            O Kit foi aniquilado
          </Text>

          <Text
            fontSize="3xl"
            color="white"
            mt={6}
            textShadow="3px 3px 6px black"
          >
            Enquanto os bosses distraíam os fracotes, foquei no líder e garanti a vitória perante a eles
          </Text>

          <Button
            mt={10}
            colorScheme="red"
            size="lg"
            onClick={() => router.push('/menu')} // substitua pelo caminho do seu menu
          >
            Voltar para o Menu
          </Button>
        </MotionBox>
      </Stack>
    </>
  )
}

export default IslandOperationsPage
