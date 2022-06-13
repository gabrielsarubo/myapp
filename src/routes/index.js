import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
// Pages
import SignIn from '../pages/SignIn'
import StudentHome from '../pages/StudentHome'
import NotFound from '../pages/NotFound'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Redirect to='/auth' /></Route>
        <Route path='/auth' component={SignIn} />
        <Route path='/student' component={StudentHome} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
