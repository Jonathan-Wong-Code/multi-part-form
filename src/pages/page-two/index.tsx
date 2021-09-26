import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, Person } from '../../redux/store';
import { useForm } from 'react-hook-form';
import { setData } from '../../redux/actions/formData';

type FormData = {
  location: string;
  email: string;
};

export function FormStepTwo() {
  const dispatch = useDispatch();
  const formData = useSelector<ReduxState, Person>((s) => s.formState);
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: Person) => {
    dispatch(setData(data));
    history.push('/form-data-3');
  };

  const onPrevClick = () => {
    history.push('/form-data-1');
  };

  return (
    <section>
      <h2>Step One</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='location'>Location</label>
        <input
          {...register('location', { required: true })}
          id='location'
          defaultValue={formData.location}
        />
        <label htmlFor='email'>Email</label>
        <input
          {...register('email')}
          id='email'
          defaultValue={formData.email}
          type='email'
        />
        <button>Next</button>
      </form>
      <button onClick={onPrevClick}>Previous</button>
    </section>
  );
}
