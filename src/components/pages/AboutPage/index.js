import React from 'react'
import { PageTemplate, Header, Footer, Heading, Paragraph } from 'components'

const AboutPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <Heading>About Us</Heading>
      <Paragraph>
        Hey, thanks for checking us out! We are SpoonSer, an Asheville not-for-profit start-up that's all about promoting volunteering for community works such your the local library and museums. Our goal is to breathe life back into local works through an accessible way, and that way is by directly sponsering a local to volunteer their time.
      </Paragraph>
      <Paragraph>
        Many want to give this time, but in our world today we often cannot afford to no matter how much we want. This gives those individuals a way do just that, but also not have to risk going without food or housing to do so.
      </Paragraph>
    </PageTemplate>
  )
}

export default AboutPage
