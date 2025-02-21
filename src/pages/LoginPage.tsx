import LoginForm from "../components/LoginForm";
import { LoginDummyData } from "../constants/LoginDummyData";
import { LoginData } from "../types/types";

const LoginPage = () => {
  const handleSubmitForm = (data: LoginData) => {
    console.log("data: ", data);
    if (
      data.clientId == LoginDummyData.clientId &&
      data.userId == LoginDummyData.userId &&
      data.password == LoginDummyData.password
    ) {
      console.log("Successful login");
    } else {
      console.log("Error");
    }
  };
  return (
    <div className="bg-gray-200">
      <LoginForm onSubmit={handleSubmitForm} />
    </div>
  );
};

export default LoginPage;
