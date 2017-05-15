import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AboutPage } from 'components'

storiesOf('AboutPage', module)
  .add('default', () => (
    <AboutPage />
  ))
