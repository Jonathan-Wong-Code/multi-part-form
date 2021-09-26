import { useForm } from 'react-hook-form';
import { Person } from '../../redux/store';

type FormData = {
  firstName: string;
  lastName: string;
};

type FormStepOneProps = {
  formData: Person;
  onSubmit: (data: Person) => void;
};

export function FormStepOne({ formData, onSubmit }: FormStepOneProps) {
  const { register, handleSubmit } = useForm<FormData>();

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
