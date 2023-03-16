// const Login = () => {
//   return <div>Login</div>;
// };

// export default Login;

import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formFields.email, formFields.password);

    // //state clear
    // setFormFields({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-10">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Login..."} />

        <FormControl
          label="email"
          labelInner="Email"
          inputType="email"
          placeholder="Enter your email"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Enter your password"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <Button text={isLoading ? "Logging in" : "Login"} submit />
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);
