import React from 'react'
import {
  BrowserRouter,
  Route, Switch, Router
} from 'react-router-dom'

import {
  App,
  Navbar,
  admin,
  student,
  coments,
  company
} from './../components/index';
import history from '../components/History'

// import StepperComponent from './../components/CreatePredictors/Stepper/index'

const ParentApp = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/navbar" component={Navbar} />
    <Route exact path="/admin" component={admin} />
    <Route exact path="/student" component={student} />
    <Route exact path="/coments" component={coments} />
    <Route exact path="/company" component={company} />



        



  </div >
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Route component={ParentApp} />
      </Router>
    </BrowserRouter>
  )
};

export default AppRoutes;