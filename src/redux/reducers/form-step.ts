import { FormStepActions } from '../actions/form-step';
export const formStepReducer = (state: number = 1, action: FormStepActions) => {
  switch (action.type) {
    case 'SET_FORM_STEP': {
      return action.step;
    }

    default:
      return state;
  }
};
