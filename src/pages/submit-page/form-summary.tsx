import { Person } from '../../redux/store';
import { Link } from 'react-router-dom';

type FormSummaryProps = {
  formData: Person;
};

export function FormSummary({ formData }: FormSummaryProps) {
  return (
    <section>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button>Submit Final Data</button>
      <Link to='/form-data-3'>Back</Link>
    </section>
  );
}
