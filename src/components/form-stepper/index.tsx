import { NumberLink } from './number-link';
import { NumberStepList } from './css';
type FormStepperProps = {
  currentStep: number;
};

const steps = [1, 2, 3, 4];

export function FormStepper({ currentStep = 1 }: FormStepperProps) {
  return (
    <>
      <NumberStepList>
        {steps.length
          ? steps.map((step) => (
              <li>
                <NumberLink step={step} isHighlighted={currentStep === step} />
              </li>
            ))
          : null}
      </NumberStepList>
    </>
  );
}
