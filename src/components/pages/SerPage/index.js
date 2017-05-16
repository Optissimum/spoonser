import React from 'react'
import { PageTemplate, Header, Footer, Heading, Paragraph } from 'components'

const SerPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <Heading>Become a sponsored Volunteer</Heading>
      <Paragraph>Interested in becoming a sponsonsered person or work at a sponsered location? Sign up below! </Paragraph>
    </PageTemplate>
  )
}

export default SerPage
