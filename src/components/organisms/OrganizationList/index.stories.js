import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { OrganizationList } from 'components'

storiesOf('OrganizationList', module)
  .add('default', () => (
    <OrganizationList />
  ))
