import React from 'react'
import { PageTemplate, Header, Footer } from 'components'
import { OrgForm } from 'containers'

const OrgRegisterPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <OrgForm />
    </PageTemplate>
  )
}

export default OrgRegisterPage
