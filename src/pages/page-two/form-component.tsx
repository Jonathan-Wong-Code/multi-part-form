import { Person } from '../../redux/store';
import { useForm } from 'react-hook-form';

type FormData = {
  location: string;
  email: string;
};

type FormStepTwoProps = {
  formData: Person;
  onSubmit: (data: Person) => void;
  onPrevClick: () => void;
};

export function FormStepTwo({
  formData,
  onSubmit,
  onPrevClick,
}: FormStepTwoProps) {
  const { register, handleSubmit } = useForm<FormData>();

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
