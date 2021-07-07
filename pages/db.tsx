import { Box, Heading, Link as ChakraLink, Text, Tooltip, useClipboard } from '@chakra-ui/react'
import React, { useState } from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PostPreview from '~components/post/post-preview'
import { getAllDbPosts, Items } from '~lib/api'
import Post from '~types/post'

type Props = {
  allDbPosts: Post[]
}

const Posts: React.FC<Props> = ({ allDbPosts }) => {
  const [dbUrl] = useState('https://blog-triszt4n.vercel.app/db')
  const { onCopy, hasCopied } = useClipboard(dbUrl)
  return (
    <>
      <Layout>
        <Container>
          <Box my={6}>
            <Heading fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}>Gyakorlat posztok</Heading>
            <Text mt={4} fontSize={{ base: 'md', sm: 'lg' }}>
              Ez az oldal az Adatbázisok VITMAB04 tárgy általam vezett gyakorlatának segédleteit gyűjti össze posztok
              formájában. Csupán a{' '}
              <Tooltip hasArrow closeOnClick closeDelay={500} label={hasCopied ? 'Másolva!' : 'Kattints a másoláshoz'}>
                <ChakraLink onClick={onCopy}>{dbUrl}</ChakraLink>
              </Tooltip>{' '}
              elérési útvonalon érhető el, navigáció elől rejtett.
            </Text>
          </Box>
          <Box mt={4}>
            {allDbPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default Posts

type AllPostsStaticProps = {
  props: { allDbPosts: Items[] }
}

export const getStaticProps = async (): Promise<AllPostsStaticProps> => {
  const allDbPosts = getAllDbPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'db'])

  return {
    props: { allDbPosts }
  }
}
