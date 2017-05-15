import React from 'react'
import { PageTemplate, Header, Footer, OrganizationList } from 'components'

const OrganizationsPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />} >
      <OrganizationList />
    </PageTemplate>
  )
}

export default OrganizationsPage
