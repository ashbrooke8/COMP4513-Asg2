const FavouritesModal = (props) => {
  let favGalleryList;
  let favArtistList;
  let favPaintingList;
  
  //if the favourite element is empty, state that to the user, and if not, create a list with all of the elements
  if (props.favGalleries.length > 0) {
    favGalleryList = (
      <ul>
        {props.favGalleries.map((gallery) => (
          <li className="text-gray-700" key={gallery.galleryId}>
            {gallery.galleryName}
            <button className="ml-4 px-3 py-1 rounded text-white transition bg-indigo-400 hover:bg-indigo-600" onClick={() => props.removeGallery(gallery)}>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    favGalleryList = (
      <p className="text-gray-700">No favourite galleries saved yet.</p>
    );
  }
  if (props.favArtists.length > 0) {
    favArtistList = (
      <ul>
        {props.favArtists.map((artist) => (
          <li className="text-gray-700" key={artist.artistId}>
            {artist.firstName} {artist.lastName}
            <button className="ml-4 px-3 py-1 rounded text-white transition bg-indigo-400 hover:bg-indigo-600" onClick={() => props.removeArtist(artist)}>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    favArtistList = (
      <p className="text-gray-700">No favourite artists saved yet.</p>
    );
  }
  if (props.favPaintings.length > 0) {
    favPaintingList = (
      <ul>
        {props.favPaintings.map((painting) => (
          <li className="text-gray-700" key={painting.paintingId}>
            {painting.title}
            <button className="ml-4 px-3 py-1 rounded text-white transition bg-indigo-400 hover:bg-indigo-600" onClick={() => props.removePainting(painting)}>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    favPaintingList = (
      <p className="text-gray-700">No favourite paintings saved yet.</p>
    );
  }

  return (
    <dialog id="favourites_modal" className="modal">
      <div className="modal-box h-[700px] max-w-[1200px] bg-purple-100">
        <div className="flex gap-6 justify-between">
          <h3 className="font-bold text-xl text-gray-700">Favourites</h3>
          <div className="flex gap-4">
        <button className="bg-indigo-400 rounded ml-4 px-3 py-1 transition hover:bg-indigo-600" onClick={props.removeAllFavourites}>Empty Favourites</button>
        {/* <div className="modal-action"> */}
          <form method="dialog">
            <button className="px-4 py-2 bg-indigo-400 text-white rounded hover:bg-indigo-600">Close</button>
          </form>
        {/* </div> */}
        </div>
        </div>
        <div className="grid grid-cols-3 p-6 gap-6">
          <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
            <p className="font-bold text-lg text-gray-700">Galleries</p>
            {favGalleryList}
          </div>
          <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
            <p className="font-bold text-lg text-gray-700">Artists</p>
            {favArtistList}
          </div>
          <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
            <p className="font-bold text-lg text-gray-700">Paintings</p>
            {favPaintingList}
          </div>
        </div>
        {/* <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div> */}
      </div>
    </dialog>
  );
};

export default FavouritesModal;
