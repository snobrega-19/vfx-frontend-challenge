import { useState } from "react";
import { FormValues, LoginFormProps } from "../types/types";
import { FormFields } from "../constants/constants";

const LoginForm = ({ onSubmit, loginErrorMessage }: LoginFormProps) => {
  const [loginData, setLoginData] = useState<FormValues>({
    clientId: "",
    userId: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState<FormValues | null>(null);

  const validateForm = (formValues: FormValues) => {
    const errors: FormValues = {};
    if (!formValues.clientId)
      errors.clientId = "You should fill client id field";

    if (!formValues.userId) errors.userId = "You should fill user id field";

    if (!formValues.password)
      errors.password = "You should fill password field";

    return Object.keys(errors).length > 0 ? errors : null;
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validateForm(loginData);
    setErrorMessages(errors);

    if (!errors) onSubmit(loginData);
  };

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-80 shadow-md p-2 bg-white" onSubmit={onFormSubmit}>
        <div className="flex justify-center p-4">
          <img src="./logo-color.svg" width="100px" />
        </div>
        <div className="flex flex-col w-full justify-center space-y-6 p-4">
          {FormFields.map((field) => (
            <div key={field} className="flex flex-col">
              {errorMessages?.[field] && (
                <p className="text-red-400">{errorMessages[field]}</p>
              )}
              <input
                type={field == "password" ? "password" : "text"}
                name={field}
                className="border border-gray-300 p-2"
                placeholder={field.toUpperCase()}
                onChange={onChangeInputValue}
                value={loginData[field] || ""}
              />
            </div>
          ))}
          <div className="flex flex-col justify-center items-center text-center m-4">
            <p className="text-red-400">{loginErrorMessage}</p>
            <button className="text-white bg-[#44b0b8] px-4 py-2 w-50 hover:cursor-pointer focus:cursor-pointer">
              Sign me in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
