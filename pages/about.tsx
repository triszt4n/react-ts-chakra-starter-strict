import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PuzzleAnimation from '~components/puzzle-animation'

const About: React.FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <PuzzleAnimation text="This page is under construction!" />
        </Container>
      </Layout>
    </>
  )
}

export default About
