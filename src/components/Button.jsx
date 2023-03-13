const Button = ({ text, submit, logout }) => {
  return (
    <button
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

export default Button;
