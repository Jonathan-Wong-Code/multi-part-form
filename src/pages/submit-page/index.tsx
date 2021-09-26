import React from 'react';
import { FormPageContainer } from '../../containers/form-container';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, Person } from '../../redux/store';
import { setFormStep } from '../../redux/actions/form-step';
import { FormSummary } from './form-summary';

export function FormSummaryContainer() {
  const dispatch = useDispatch();

  const formData = useSelector<ReduxState, Person>((s) => s.formState);
  const currentStep = useSelector<ReduxState, number>((s) => s.currentStep);

  React.useLayoutEffect(() => {
    dispatch(setFormStep(4));
  }, [dispatch]);

  return (
    <>
      <FormPageContainer currentStep={currentStep}>
        <FormSummary formData={formData} />
      </FormPageContainer>
    </>
  );
}
