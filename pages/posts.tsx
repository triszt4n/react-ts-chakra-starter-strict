import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import Intro from '~components/intro'
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
          <Intro />
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
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts }
  }
}
