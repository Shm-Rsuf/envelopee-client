import React from "react";

const Button = ({ text, submit, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={` py-2 px-4 rounded text-white tracking-wider duration-300 ${
        logout
          ? "bg-rose-500 hover:bg-rose-600"
          : "bg-cyan-500 hover:bg-cyan-600 mt-5"
      }`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
