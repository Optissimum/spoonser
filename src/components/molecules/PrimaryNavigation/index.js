import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/about" activeClassName="active">SpoonSer</Link></li>
      <li><Link to="/spoon" activeClassName="active">Apply to Spoon</Link></li>
      <li><Link to="/ser" activeClassName="active">Apply to Ser</Link></li>
      <li><Link to="/organization" activeClassName="active">Orgs Supported</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
