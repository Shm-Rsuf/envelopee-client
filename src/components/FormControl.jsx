import React from "react";

const FormControl = ({
  label,
  labelInner,
  inputType,
  placeholder,
  formFields,
  setFormFields,
}) => {
  return (
    <div className="form-control flex flex-col gap-2">
      <label
        htmlFor={label}
        className="cursor-pointer hover:text-cyan-500 duration-300"
      >
        {labelInner}
      </label>
      <input
        type={inputType}
        id={label}
        placeholder={placeholder}
        value={formFields[label]}
        onChange={(e) =>
          setFormFields({ ...formFields, [label]: e.target.value })
        }
        className="border border-cyan-200 py-2 px-4 w-full outline-none rounded focus:border-cyan-500 duration-300"
      />
    </div>
  );
};

export default React.memo(FormControl);
