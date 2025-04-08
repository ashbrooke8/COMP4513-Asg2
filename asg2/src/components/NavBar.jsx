import { Link, useLocation } from "react-router-dom";
import FavouritesModal from "./FavouritesModal";
import AboutModal from "./AboutModal";

const NavBar = (props) => {
  const location = useLocation();
  console.log(location)
  const isAtLink = (path) => location.pathname === path;

  const openFavouritesModal = () => {
    const modal = document.getElementById("favourites_modal");
    if (modal) modal.showModal();
  };

  const openAboutModal = () => {
    const modal = document.getElementById("about_modal");
    if (modal) modal.showModal();
  };

  //logic for disabling the favourites button when there is nothing in it
  let favouritesDisabled = false;
  if (
    (!props.favGalleries || props.favGalleries.length === 0) &&
    (!props.favArtists || props.favArtists.length === 0) &&
    (!props.favPaintings || props.favPaintings.length === 0)
  ) {
    favouritesDisabled = true;
  }

  let favouritesButton = "px-3 py-1 rounded text-white transition ";
  if (favouritesDisabled) {
    favouritesButton += "bg-gray-400 cursor-not-allowed";
  } else {
    favouritesButton += "bg-indigo-400 hover:bg-indigo-600";
  }

  return (
    <header className="bg-indigo-500 text-white flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold border-2 p-2 rounded">Art Explorer</div>
      <nav className="space-x-4">
        <Link
          className={`px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600 ${isAtLink("/artists") ? "pointer-events-none opacity-50" : ""}`}
          to="/artists"
        >
          Artists
        </Link>
        <Link
          className={`px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600 ${isAtLink("/paintings") ? "pointer-events-none opacity-50" : ""}`}
          to="/paintings"
        >
          Paintings
        </Link>
        <Link
          className={`px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600 ${isAtLink("/galleries") ? "pointer-events-none opacity-50" : ""}`}
          to="/galleries"
        >
          Galleries
        </Link>
        <Link
          className={`px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600 ${isAtLink("/genres") ? "pointer-events-none opacity-50" : ""}`}
          to="/genres"
        >
          Genres
        </Link>
        <button
          onClick={openFavouritesModal}
          className={favouritesButton}
          disabled={favouritesDisabled}
        >
          Favourites
        </button>
        <button
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          onClick={openAboutModal}
        >
          About
        </button>
        <Link
          className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          to="/login"
        >
          Logout
        </Link>
      </nav>
      <FavouritesModal
        favGalleries={props.favGalleries}
        favArtists={props.favArtists}
        favPaintings={props.favPaintings}
        removeGallery={props.removeGallery}
        removeArtist={props.removeArtist}
        removePainting={props.removePainting}
        removeAllFavourites={props.removeAllFavourites}
      />
      <AboutModal />
    </header>
  );
};

export default NavBar;
