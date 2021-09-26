import { formReducer } from '../reducers/formData';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  formState: formReducer,
});
