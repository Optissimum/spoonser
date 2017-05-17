import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { OrgForm } from 'containers'

storiesOf('OrgForm', module)
  .add('default', () => (
    <OrgForm />
  ))
