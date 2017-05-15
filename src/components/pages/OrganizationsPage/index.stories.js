import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { OrganizationsPage } from 'components'

storiesOf('OrganizationsPage', module)
  .add('default', () => (
    <OrganizationsPage />
  ))
