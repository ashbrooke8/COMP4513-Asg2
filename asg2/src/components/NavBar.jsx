import { Link } from "react-router-dom";
import FavouritesModal from "./FavouritesModal";

const NavBar = (props) => {
  const openFavouritesModal = () => {
    const modal = document.getElementById("favourites_modal");
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
        <button
          onClick={openFavouritesModal}
          // className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600"
          className={favouritesButton}
          disabled={favouritesDisabled}
        >
          Favourites
        </button>
        <Link className="px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600">
          About
        </Link>
      </nav>
      <FavouritesModal
        favGalleries={props.favGalleries}
        favArtists={props.favArtists}
        favPaintings={props.favPaintings}
      />
    </header>
  );
};

export default NavBar;
