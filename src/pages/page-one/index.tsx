import React from 'react';
import { FormPageContainer } from '../../containers/form-container';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, Person } from '../../redux/store';
import { setData } from '../../redux/actions/form-data';
import { setFormStep } from '../../redux/actions/form-step';
import { FormStepOne } from './form-component';
import { useHistory } from 'react-router-dom';

export function FormStepOneContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const formData = useSelector<ReduxState, Person>((s) => s.formState);
  const currentStep = useSelector<ReduxState, number>((s) => s.currentStep);

  React.useLayoutEffect(() => {
    dispatch(setFormStep(1));
  }, [dispatch]);

  const onSubmit = (data: Person) => {
    dispatch(setData(data));
    history.push('/form-data-2');
  };

  return (
    <>
      <FormPageContainer currentStep={currentStep}>
        <FormStepOne formData={formData} onSubmit={onSubmit} />
      </FormPageContainer>
    </>
  );
}
