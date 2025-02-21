import { useState } from "react";
import { LoginFormProps } from "../types/types";

export type FormValues = {
  clientId?: string;
  userId?: string;
  password?: string;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [loginData, setLoginData] = useState({
    clientId: "",
    userId: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState<FormValues>();

  const validateForm = (formValues: FormValues) => {
    console.log(formValues);
    let errors = { clientId: "", userId: "", password: "" };
    if (!formValues.clientId || formValues.clientId == "") {
      console.log("clientId empty");
      errors.clientId = "You should fill client id field";
    }
    if (!formValues.userId || formValues.userId == "") {
      console.log("userId empty");
      errors.userId = "You should fill user id field";
    }
    if (!formValues.password || formValues.password == "") {
      console.log("Password empty");
      errors.password = "You should fill password field";
    }
    setErrorMessages(errors);
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    validateForm(loginData);
    console.log(errorMessages);
    if (
      errorMessages?.clientId ||
      errorMessages?.userId ||
      errorMessages?.password
    ) {
      return;
    }

    onSubmit(loginData);
  };

  const onChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setLoginData({ ...loginData, [field]: event.currentTarget?.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-80 shadow-md p-2 bg-white" onSubmit={onFormSubmit}>
        <div className="flex justify-center p-4">
          <img src="./logo-color.svg" width="100px" />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div>
            {errorMessages?.clientId !== "" && (
              <p className="text-red-400">{errorMessages?.clientId}</p>
            )}
            <input
              type="text"
              id="clientIdInput"
              className="border p-1"
              placeholder="CLIENT ID"
              onChange={(event) => onChangeInputValue(event, "clientId")}
            />
          </div>
          <div>
            {errorMessages?.userId !== "" && (
              <p className="text-red-400">{errorMessages?.userId}</p>
            )}
            <input
              type="text"
              id="userIdInput"
              className="border p-1"
              placeholder="USER ID"
              onChange={(event) => onChangeInputValue(event, "userId")}
            />
          </div>
          <div>
            {errorMessages?.password !== "" && (
              <p className="text-red-400">{errorMessages?.password}</p>
            )}
            <input
              type="password"
              id="passwordInput"
              className="border p-1"
              placeholder="PASSWORD"
              onChange={(event) => onChangeInputValue(event, "password")}
            />
          </div>
          <button className="text-white bg-[#44b0b8] px-4 py-2 hover:cursor-pointer focus:cursor-pointer">
            Sign me in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
