import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const StateZip = styled.div`
  display: flex;
  > * {
    margin-right: 1rem;
  }
`

const OrgForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Add your Organization</Heading>
      <Field name="name" label="Name" component={ReduxField} />
      <Field name="address1" label="Address" component={ReduxField} />
      <Field name="address2" component={ReduxField} />
      <StateZip>
        <Field name="state" label="State" component={ReduxField} />
        <Field name="zip" label="Zip Code" type="numeric" component={ReduxField} />
      </StateZip>
      <Button type="submit" disabled={submitting}>Add</Button>
    </Form>
  )
}

OrgForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default OrgForm
