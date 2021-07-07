import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Intro: React.FC = () => {
  return (
    <Box my={6}>
      <Heading fontSize={{ base: '5xl', sm: '7xl', md: '8xl' }} textAlign="center">
        Welcome.
      </Heading>
    </Box>
  )
}

export default Intro
