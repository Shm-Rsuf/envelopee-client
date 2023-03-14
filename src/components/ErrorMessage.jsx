const ErrorMessage = ({ error }) => {
  return (
    <p className="bg-rose-50 text-rose-500 py-2 px-4 border rounded border-rose-500">
      {error}
    </p>
  );
};

export default ErrorMessage;
