import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import Intro from '~components/intro'

const About: React.FC = () => {
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

export default About
