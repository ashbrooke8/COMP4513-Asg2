import { Link } from "react-router-dom";
import FavouritesModal from "./FavouritesModal";

const NavBar = () => {
  const openFavouritesModal = () => {
    const modal = document.getElementById("favourites_modal");
    if (modal) modal.showModal();
  };

  return (
    <header className="bg-indigo-500 text-white flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">Art Dashboard</div>
      <nav className="space-x-4">
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600" to="/artists">
          Artists
        </Link>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600" to="/paintings">
          Paintings
        </Link>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600" to="/galleries">
          Galleries
        </Link>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600" to="/genres">
          Genres
        </Link>
        <button
          onClick={openFavouritesModal}
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
        >
          Favourites
        </button>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600">
          About
        </Link>
      </nav>
      <FavouritesModal />
    </header>
  );
};

export default NavBar;
