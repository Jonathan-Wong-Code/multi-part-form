import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  FormStepOneContainer,
  FormStepTwoContainer,
  FormStepThreeContainer,
  FormSummaryContainer,
  HomePage,
} from './pages';

function App() {
  return (
    <div className='App'>
      <h1>Hallo!</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/form-data-1' component={FormStepOneContainer} />
          <Route path='/form-data-2' component={FormStepTwoContainer} />
          <Route path='/form-data-3' component={FormStepThreeContainer} />
          <Route path='/summary' component={FormSummaryContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
