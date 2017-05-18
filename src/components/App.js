import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, OrganizationsPage, AboutPage, SerPage, SpoonPage, NotFoundPage, OrgRegisterPage } from 'components'
import { GoogleTagManager } from 'containers'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <GoogleTagManager />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/index.html" component={HomePage} />
          <Route path="/ser" component={SerPage} />
          <Route path="/work" component={SerPage} />
          <Route path="/spoon" component={SpoonPage} />
          <Route path="/support" component={SpoonPage} />
          <Route path="/organization" component={OrganizationsPage} />
          <Route path="/organization_registry" component={OrgRegisterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
