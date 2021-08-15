import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-gray-200 font-bold text-5xl p-4 text-white">
        This is header
      </div>
      <Link
        to="/"
        className="p-3 rounded-lg bg-green-300 font-bold text-white hover:bg-green-500"
      >
        Home Page
      </Link>
      <div className="p-6">
        <Link
          to="/signin"
          className="p-3 rounded-lg bg-blue-400 font-bold text-white hover:bg-blue-700 mr-4 mt-4"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          className="p-3 rounded-lg bg-red-400 font-bold text-white hover:bg-red-700"
        >
          Sign up
        </Link>
      </div>
    </>
  );
};

export default Header;
