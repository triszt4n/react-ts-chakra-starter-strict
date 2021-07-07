import { Box, Container, Flex, IconButton, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import GithubImage from '~assets/me/github.jpg'
import { NAV_ITEMS } from './navbar/config'

const Footer: React.FC = () => (
  <Box as="footer">
    <Container py={8} as={Flex} justifyContent="space-between" direction={{ base: 'column', sm: 'row' }} maxW="6xl">
      <Flex mb={{ base: 4, sm: 0 }} justifyContent={{ base: 'center', sm: 'flex-start' }}>
        <Flex rounded="full" overflow="hidden" h="3.5rem" w="3.5rem" mr={4} mt={2} alignItems="center">
          <Image src={GithubImage} alt="Trisztán Piller" placeholder="blur" />
        </Flex>
        <Flex direction="column">
          <Text fontSize="xl" fontWeight="bolder">
            triszt4n's site.
          </Text>
          <Stack direction="row" spacing={4}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.label} href={item.path} passHref>
                <ChakraLink>{item.label}</ChakraLink>
              </Link>
            ))}
          </Stack>
          <Text mt={1} fontSize="sm">
            Source available on{' '}
            <ChakraLink target="_blank" href="https://github.com/triszt4n/blog">
              GitHub
            </ChakraLink>
            .
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" justifyContent={{ base: 'center', sm: 'flex-end' }}>
        <Stack spacing={0} direction="row" justifyContent={{ base: 'center', sm: 'flex-end' }}>
          <IconButton
            as="a"
            href="mailto:trisztanpiller@gmail.com"
            aria-label="Write an email to me"
            icon={<FaEnvelope size="1.5rem" />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://facebook.com/triszt4n"
            target="_blank"
            aria-label="Open Facebook profile"
            icon={<FaFacebook size="1.5rem" />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://github.com/triszt4n"
            target="_blank"
            aria-label="Open Github profile"
            icon={<FaGithub size="1.5rem" />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://linkedin.com/in/triszt4n/"
            target="_blank"
            aria-label="Open LinkedIn profile"
            icon={<FaLinkedin size="1.5rem" />}
            variant="ghost"
          />
        </Stack>
        <Text mt={2} textAlign={{ base: 'center', sm: 'right' }}>
          &copy; 2021 — Trisztán Piller
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default Footer
