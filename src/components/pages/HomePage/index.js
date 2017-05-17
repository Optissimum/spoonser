// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Footer, HomeFeatureList, Hero } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Hero />
      <HomeFeatureList />
    </PageTemplate>
  )
}

export default HomePage
