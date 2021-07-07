import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PuzzleAnimation from '~components/puzzle-animation'

const NotFound: React.FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <PuzzleAnimation text="Page not found!" />
        </Container>
      </Layout>
    </>
  )
}

export default NotFound
