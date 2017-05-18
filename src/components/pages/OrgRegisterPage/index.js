import React from 'react'
import styled from 'styled-components'
import { PageTemplate, Header, Footer, Feature } from 'components'
import { OrgForm } from 'containers'

const StyledFeature = styled(Feature)`
  padding-left = 0;
`

const OrgRegisterPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <StyledFeature title='Register your organization with Spoonser'>
          Registering yourselves with Spoonser has great potential for your organization. It puts you on the map for gaining volunteers that can put their all into helping you without being cut short by monetary limitations. This means you no longer have to split your choices between those who truly want to help and those who have the time. The best part of all this? It doesn't cost your organization anything, and it never will. We don't want to see money wasted on having to advertise yourselves to your local community, or on searching for volunteers that really care.
          <br/>
          Fill out below information, and we will get in contact with you to confirm your details. After that, we can add you to the list of available Orgs that people can select from by default, connecting you with volunteers one step faster.
      </StyledFeature>
      <OrgForm />
    </PageTemplate>
  )
}

export default OrgRegisterPage
