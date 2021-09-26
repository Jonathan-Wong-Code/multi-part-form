import { useSelector } from 'react-redux';
import { FormStepper } from '../../components/form-stepper';
import { ReduxState } from '../../redux/store';

type FormPageContainerProps = {
  children: React.ReactNode;
  currentStep: number;
};

export function FormPageContainer({
  children,
  currentStep,
}: FormPageContainerProps) {
  return (
    <div>
      <FormStepper currentStep={currentStep} />
      {children}
    </div>
  );
}
