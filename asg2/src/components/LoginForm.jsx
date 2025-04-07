import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-lg w-80">
      <h2 className="text-center text-lg font-semibold mb-4 text-gray-700">
        Login
      </h2>
      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-between">
          <Link
            className="px-4 py-2 bg-purple-100 border border-gray-400 rounded-md hover:bg-gray-400"
            to="/artists"
          >
            Login
          </Link>
          <button className="px-4 py-2 bg-purple-100 border border-gray-400 rounded-md hover:bg-gray-400">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
