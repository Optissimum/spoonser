import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { OrgRegisterPage } from 'components'

storiesOf('OrgRegisterPage', module)
  .add('default', () => (
    <OrgRegisterPage />
  ))
