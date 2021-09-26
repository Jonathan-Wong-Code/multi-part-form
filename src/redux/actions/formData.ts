import { Person } from '../store';

type SetDisclaimerAction = {
  type: 'SET_DATA';
  data: Person;
};

export const setData = (formData: Person): SetDisclaimerAction => {
  return {
    type: 'SET_DATA',
    data: { ...formData },
  };
};

export type FormActions = SetDisclaimerAction;
