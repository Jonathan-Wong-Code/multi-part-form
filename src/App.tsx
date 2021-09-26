import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormSummary,
  HomePage,
} from './pages';

function App() {
  return (
    <div className='App'>
      <h1>Hallo!</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/form-data-1' component={FormStepOne} />
          <Route path='/form-data-2' component={FormStepTwo} />
          <Route path='/form-data-3' component={FormStepThree} />
          <Route path='/summary' component={FormSummary} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
