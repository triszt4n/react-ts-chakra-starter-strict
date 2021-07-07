import { Box, Container, Flex, IconButton, Link as ChakraLink, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import GithubImage from '~assets/me/github.jpg'
import { NAV_ITEMS } from './navbar/config'

const Footer: React.FC = () => (
  <Box as="footer">
    <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container maxW="6xl" py={8}>
        <Flex justifyContent="space-between" flexDirection={{ base: 'column', sm: 'row' }}>
          <Flex mb={{ base: 4, sm: 0 }} justifyContent={{ base: 'center', sm: 'flex-start' }}>
            <Flex rounded="full" overflow="hidden" h="3.5rem" w="3.5rem" mr={4}>
              <Image src={GithubImage} alt="Trisztán Piller" placeholder="blur" />
            </Flex>
            <Flex direction="column">
              <Text fontSize="xl" fontWeight="bolder" textAlign={{ base: 'center', sm: 'left' }}>
                triszt4n's site.
              </Text>
              <Stack mt={1} direction="row" spacing={6} justifyContent={{ base: 'center', sm: 'flex-start' }}>
                {NAV_ITEMS.map((item) => (
                  <Link key={item.label} href={item.path} passHref>
                    <ChakraLink>{item.label}</ChakraLink>
                  </Link>
                ))}
              </Stack>
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
                aria-label="Open Facebook profile"
                icon={<FaFacebook size="1.5rem" />}
                variant="ghost"
              />
              <IconButton
                as="a"
                href="https://github.com/triszt4n"
                aria-label="Open Github profile"
                icon={<FaGithub size="1.5rem" />}
                variant="ghost"
              />
              <IconButton
                as="a"
                href="https://linkedin.com/in/triszt4n/"
                aria-label="Open LinkedIn profile"
                icon={<FaLinkedin size="1.5rem" />}
                variant="ghost"
              />
            </Stack>
            <Text mt={1} textAlign={{ base: 'center', sm: 'right' }}>
              &copy; 2021 — Trisztán Piller
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  </Box>
)

export default Footer
