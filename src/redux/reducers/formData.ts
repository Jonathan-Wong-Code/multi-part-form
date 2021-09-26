import { FormActions } from '../actions/formData';
import { Person } from '../store';

export const initialPerson = {
  firstName: '',
  lastName: '',
  location: '',
  email: '',
  favouriteFood: '',
};

export const formReducer = (
  state: Person = initialPerson,
  action: FormActions
) => {
  switch (action.type) {
    case 'SET_DATA': {
      console.log('hallo?');
      return { ...state, ...action.data };
    }

    default:
      return state;
  }
};
