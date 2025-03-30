import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="bg-indigo-500 text-white flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">Art Dashboard</div>
      <nav className="space-x-4">
        <Link
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          to="/artists"
        >
          Artists
        </Link>
        <Link
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          to="/paintings"
        >
          Paintings
        </Link>
        <Link
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          to="/galleries"
        >
          Galleries
        </Link>
        <Link
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          to="/genres"
        >
          Genres
        </Link>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600">
          Favorites
        </Link>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600">
          About
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
