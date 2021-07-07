import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import Intro from '~components/intro'
import PuzzleAnimation from '~components/puzzle-animation'
import { getAllPosts, Items } from '~lib/api'
import Post from '~types/post'

type Props = {
  allPosts: Post[]
}

const Index: React.FC<Props> = ({ allPosts }) => {
  const latestPosts = allPosts.slice(0, 1)
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <PuzzleAnimation text="This page is under construction!" />
        </Container>
      </Layout>
    </>
  )
}

export default Index

type AllPostsStaticProps = {
  props: { allPosts: Items[] }
}

export const getStaticProps = async (): Promise<AllPostsStaticProps> => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt'])

  return {
    props: { allPosts }
  }
}
