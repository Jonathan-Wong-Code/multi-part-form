import { Link } from 'react-router-dom';
import { FormStepper } from '../../components/form-stepper';
export function HomePage() {
  return (
    <section>
      <h2>Homepage</h2>
      <Link to='/form-data-1'>Start form!</Link>
    </section>
  );
}
