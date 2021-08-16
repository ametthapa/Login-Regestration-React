import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";

import { RiLockPasswordFill } from "react-icons/ri";

const Signin = () => {
  return (
    <div className="p-6 bg-gray-200">
      <div className="grid grid-cols-2 w-3/4 m-auto bg-white rounded-lg shadow-lg p-6">
        <div className="">
          <img src="signin.jpg" alt="Sign In" />
          <span className="border-b border-black">
            <Link to="/signup">Create an account</Link>
          </span>
        </div>
        <div>
          <div className="text-4xl font-bold p-6 pb-8 pl-2 text-left">
            Sign in
          </div>
          <form>
            <div className="border-b border-black flex w-3/4 p-2 ml-2 mb-6">
              <MdEmail />
              <input
                type="text"
                placeholder="Your E-mail"
                className="pl-4 focus:outline-none"
              />
            </div>
            <div className="border-b border-black flex w-3/4 p-2 ml-2 mb-6">
              <RiLockPasswordFill />
              <input
                type="password"
                placeholder="Your Password"
                className="pl-4 focus:outline-none"
              />
            </div>
            <div className="items-left flex justify-start items-center ml-2">
              <input type="checkbox" value="1" />
              <span className="ml-3">Remember me</span>
            </div>
            <div className="flex justify-start items-center py-4 px-2">
              <input
                type="submit"
                value="Log in"
                className="bg-blue-400 hover:bg-blue-500 text-white py-3 px-7 rounded-md cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
