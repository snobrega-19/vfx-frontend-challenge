import { LoginFormProps } from "../types/types";

interface FormElements extends HTMLFormControlsCollection {
  clientIdInput: HTMLInputElement;
  userIdInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
}
interface LoginFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const onFormSubmit = (event: React.FormEvent<LoginFormElements>) => {
    event.preventDefault();
    const formData = {
      clientId: event.currentTarget.elements.clientIdInput.value,
      userId: event.currentTarget.elements.userIdInput.value,
      password: event.currentTarget.elements.passwordInput.value,
    };
    onSubmit(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-80 shadow-md p-2 bg-white" onSubmit={onFormSubmit}>
        <div className="flex justify-center p-4">
          <img src="./logo-color.svg" width="100px" />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <input
            type="text"
            id="clientIdInput"
            className="border p-1"
            placeholder="CLIENT ID"
          />
          <input
            type="text"
            id="userIdInput"
            className="border p-1"
            placeholder="USER ID"
          />
          <input
            type="password"
            id="passwordInput"
            className="border p-1"
            placeholder="PASSWORD"
          />
          <button className="text-white bg-[#44b0b8] px-4 py-2 hover:cursor-pointer focus:cursor-pointer">
            Sign me in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
