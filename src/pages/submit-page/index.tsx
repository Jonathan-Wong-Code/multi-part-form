import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, Person } from '../../redux/store';
import { useForm } from 'react-hook-form';
import { setData } from '../../redux/actions/formData';
import { Link } from 'react-router-dom';

export function FormSummary() {
  const formData = useSelector<ReduxState, Person>((s) => s.formState);

  return (
    <section>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button>Submit Final Data</button>
      <Link to='/form-data-3'>Back</Link>
    </section>
  );
}
