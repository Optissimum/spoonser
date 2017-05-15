import React from 'react'
import { PageTemplate, Header, Footer, Heading, Paragraph } from 'components'

const SpoonPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <Heading>Sponser a Volunteer</Heading>
      <Paragraph>Interested in sponsoring a location or person? Sign up below! </Paragraph>
    </PageTemplate>
  )
}

export default SpoonPage
