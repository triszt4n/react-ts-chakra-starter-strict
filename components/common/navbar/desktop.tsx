import { Box, Link as ChakraLink, Stack, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NAV_ITEMS } from './config'

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue('black', 'brand.100')
  const currentLinkColor = useColorModeValue('blue.500', 'yellow.300')
  const router = useRouter()
  return (
    <Stack direction="row" spacing={10}>
      {NAV_ITEMS.map((item) => (
        <Box key={item.label}>
          <Box
            p={1}
            display="block"
            position="relative"
            overflow="hidden"
            _hover={{
              _after: { transform: 'translate3d(0, 0, 0)', opacity: 1 }
            }}
            _after={{
              content: `''`,
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              opacity: 0,
              height: '0.2rem',
              backgroundColor: currentLinkColor,
              transform: 'translate3d(-100%, 0, 0)',
              transition: 'opacity .3s, transform .3s'
            }}
          >
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href={item.path}>
              <ChakraLink
                _hover={{ textDecor: 'none' }}
                color={router.pathname === item.path ? currentLinkColor : linkColor}
              >
                {item.label}
              </ChakraLink>
            </Link>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav
