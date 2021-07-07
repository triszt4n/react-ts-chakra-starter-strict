import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer'
import Meta from './meta'
import Navbar from './navbar'

type Props = {
  background?: string
}

const Layout: React.FC<Props> = ({ background, children }) => {
  return (
    <>
      <Meta />
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Box background={background} flex={1} pb={20}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
