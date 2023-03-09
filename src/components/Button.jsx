const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-cyan-500 py-2 rounded text-white tracking-wider hover:bg-cyan-600 duration-300 mt-5"
    >
      {text}
    </button>
  );
};

export default Button;
