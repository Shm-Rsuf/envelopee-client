import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    await signup(formFields.name, formFields.email, formFields.password);

    //state clear
    // setFormFields({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-10">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Register..."} />

        <FormControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="Enter your name"
          formFields={formFields}
          setFormFields={setFormFields}
        />

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

        <Button text="Register" submit />
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Register);
