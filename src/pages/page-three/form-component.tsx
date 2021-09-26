import { Person } from '../../redux/store';
import { useForm } from 'react-hook-form';

type FormData = {
  favouriteFood: string;
};

type FormStepThreeProps = {
  formData: Person;
  onSubmit: (data: Person) => void;
  onPrevClick: () => void;
};

export function FormStepThree({
  formData,
  onSubmit,
  onPrevClick,
}: FormStepThreeProps) {
  const { register, handleSubmit } = useForm<FormData>();

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
