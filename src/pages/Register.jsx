import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register..."} />

        <div className="form-control flex flex-col gap-2">
          <label
            htmlFor="name"
            className="cursor-pointer hover:text-cyan-500 duration-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            className="border border-cyan-200 py-2 px-4 w-[20rem] outline-none rounded focus:border-cyan-500 duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
