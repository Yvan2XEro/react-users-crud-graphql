import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { User } from "@/types";

interface UserFormProps {
  initialValues?: User;
  onSubmit: (values: User) => void;
}

const EditUserForm: React.FC<
  InjectedFormProps<User, UserFormProps> & UserFormProps
> = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="first_name"
        >
          First Name
        </label>
        <Field
          name="first_name"
          component="input"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="last_name"
        >
          Last Name
        </label>
        <Field
          name="last_name"
          component="input"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <Field
          name="email"
          component="input"
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="birth_date"
        >
          Birth Date
        </label>
        <Field
          name="birth_date"
          component="input"
          type="date"
          normalize={(value: string) => value}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
          Gender
        </label>
        <Field
          name="gender"
          component="select"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        >
          <option>Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Field>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default reduxForm<User, UserFormProps>({
  form: "userForm",
  enableReinitialize: true,
})(EditUserForm);
