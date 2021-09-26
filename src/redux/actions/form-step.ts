type SetFormStepAction = {
  type: 'SET_FORM_STEP';
  step: number;
};

export const setFormStep = (step: number): SetFormStepAction => {
  return {
    type: 'SET_FORM_STEP',
    step,
  };
};

export type FormStepActions = SetFormStepAction;
