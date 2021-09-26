import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, Person } from '../../redux/store';
import { useForm } from 'react-hook-form';
import { setData } from '../../redux/actions/formData';

type FormData = {
  firstName: string;
  lastName: string;
};

export function FormStepOne() {
  const dispatch = useDispatch();
  const formData = useSelector<ReduxState, Person>((s) => s.formState);
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: Person) => {
    dispatch(setData(data));
    history.push('/form-data-2');
  };

  return (
    <section>
      <h2>Step One</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First name</label>
        <input
          {...register('firstName')}
          id='firstName'
          defaultValue={formData.firstName}
        />
        <label htmlFor='lastName'>Last name</label>
        <input
          {...register('lastName')}
          id='lastName'
          defaultValue={formData.lastName}
        />
        <button>Next</button>
      </form>
    </section>
  );
}
