import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';

export type Person = {
  firstName?: string;
  lastName?: string;
  location?: string;
  email?: string;
  favouriteFood?: string;
};

export interface ReduxState {
  formState: Person;
  currentStep: number;
}

export function initStore() {
  return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware()));
}
