import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { LoginDummyData } from "../constants/constants";
import { LoginData } from "../types/types";
import { useEffect, useState } from "react";
import { useAuth } from "../context/LoginProvider";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmitForm = (data: LoginData) => {
    if (
      data.clientId == LoginDummyData.clientId &&
      data.userId == LoginDummyData.userId &&
      data.password == LoginDummyData.password
    ) {
      setIsLoggedIn(true);
    } else {
      console.log("there was an error");
      setLoginErrorMessage("Your login credentials are wrong.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="bg-gray-200">
      <LoginForm
        onSubmit={handleSubmitForm}
        loginErrorMessage={loginErrorMessage}
      />
    </div>
  );
};

export default LoginPage;
