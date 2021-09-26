import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, Person } from '../../redux/store';
import { useForm } from 'react-hook-form';
import { setData } from '../../redux/actions/formData';

type FormData = {
  favouriteFood: string;
};

export function FormStepThree() {
  const dispatch = useDispatch();
  const formData = useSelector<ReduxState, Person>((s) => s.formState);
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: Person) => {
    dispatch(setData(data));
    history.push('/summary');
  };

  const onPrevClick = () => {
    history.push('/form-data-2');
  };

  return (
    <section>
      <h2>Step Three</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='favouriteFood'>Favourite Food</label>
        <input
          {...register('favouriteFood', { required: true })}
          id='favouriteFood'
          defaultValue={formData.favouriteFood}
        />

        <button>Next</button>
      </form>
      <button onClick={onPrevClick}>Previous</button>
    </section>
  );
}
