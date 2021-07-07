import { Box } from '@chakra-ui/react'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PostPreview from '~components/post/post-preview'
import { getAllPosts, Items } from '~lib/api'
import Post from '~types/post'

type Props = {
  allPosts: Post[]
}

const Posts: React.FC<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Container>
          <Box mt={{ base: 10, md: 20 }}>
            {allPosts.map((post) => (
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
  props: { allPosts: Items[] }
}

export const getStaticProps = async (): Promise<AllPostsStaticProps> => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'db'])

  return {
    props: { allPosts }
  }
}
