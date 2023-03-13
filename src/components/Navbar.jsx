import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "./Button";

const Navbar = () => {
  const { user } = useAuthContext();
  // console.log(user);
  return (
    <header className="header py-10 flex justify-between">
      <div className="logo">
        <Link
          to="/"
          className="hover:text-cyan-500 text-xl font-semibold duration-500"
        >
          envelopee
        </Link>
      </div>
      <nav>
        {!user && (
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
        )}
        {user && (
          <div className="flex items-center gap-2">
            <p>
              Logged in as{" "}
              <span className="text-cyan-500 capitalize">{user.name}</span>
            </p>
            <Button text="Logout" logout />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
