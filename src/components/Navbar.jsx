import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header py-10 flex justify-between">
      <div className="logo">
        <Link to="/" className="hover:text-cyan-500 font-semibold duration-500">
          envelopee
        </Link>
      </div>
      <nav>
        <div className="flex gap-5">
          <Link
            to="/login"
            className="hover:text-cyan-500 hover:underline underline-offset-2 duration-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-cyan-500 hover:underline underline-offset-2 duration-500"
          >
            Register
          </Link>
        </div>
        {/* <div>
          <p>
            Logged in as <span className="text-cyan-500">Usuf</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
