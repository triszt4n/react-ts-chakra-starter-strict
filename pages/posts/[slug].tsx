import { Flex } from '@chakra-ui/react'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PostBody from '~components/post/post-body'
import PostHeader from '~components/post/post-header'
import PostTitle from '~components/post/post-title'
import { getAllPosts, getPostBySlug, Items } from '~lib/api'
import markdownToHtml from '~lib/markdownToHtml'
import PostType from '~types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
}

const Post: React.FC<Props> = ({ post, morePosts }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{post.title} | triszt4n</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <Flex direction="column" as="article" mb={4}>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} />
              <PostBody content={post.content} />
            </Flex>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

type PostStaticProps = {
  props: {
    post: Items & { content: string }
  }
}

export const getStaticProps = async ({ params }: Params): Promise<PostStaticProps> => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
    'comment',
    'db'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
