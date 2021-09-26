import { NumberStep } from './css';

type NumberLinkProps = {
  step: number;
  isHighlighted: boolean;
};

export function NumberLink({ step = 1, isHighlighted }: NumberLinkProps) {
  return (
    <NumberStep
      to={step !== 4 ? `/form-data-${step}` : '/summary'}
      step={step}
      isHighlighted={isHighlighted}
    />
  );
}
