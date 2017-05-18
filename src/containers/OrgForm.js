import React from 'react'
import { reduxForm } from 'redux-form'
import { postCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { OrgForm } from 'components'

const OrgFormContainer = props => <OrgForm {...props} />

const onSubmit = (data, dispatch) => dispatch(postCreateRequest(data))

const validate = createValidator({
  name: [required],
  address1: [required],
  state: [required],
  zip: [required],
  phone: [required],
  email: [required],
  taxId: [required],
})

export default reduxForm({
  form: 'OrgForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(OrgFormContainer)
