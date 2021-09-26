import { formReducer } from './form-data';
import { formStepReducer } from './form-step';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  formState: formReducer,
  currentStep: formStepReducer,
});
