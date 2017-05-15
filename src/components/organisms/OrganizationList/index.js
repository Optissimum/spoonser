import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading, Paragraph } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const OrganizationList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Organizations</StyledHeading>
    <Description>
      Places in the local community we are currently working with:<br />
      <Link href="/">Register your organization today!</Link>
    </Description>
    <Grid>
      <StyledFeature
        img="https://assets.merriam-webster.com/mw/images/gallery/gal-wap-slideshow-slide/a-thoughtful-guide-to-words-about-nonsense-bunkum-693@1x.jpg"
        link="https://www.buncombecounty.org/governing/depts/library/Default.aspx"
        title="Buncombe Library"
      />
    </Grid>
  </div>
)

export default OrganizationList
