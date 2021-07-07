import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '~components/common/container'
import Header from '~components/common/header'
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
  preview?: boolean
}

const Post: React.FC<Props> = ({ post, morePosts, preview }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Next.js Blog Example</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} />
              <PostBody content={post.content} />
            </article>
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
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
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
