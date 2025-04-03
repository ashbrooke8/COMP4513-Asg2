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
        <h3 className="font-bold text-xl text-gray-700">Favourites</h3>
        {/* <p className="py-4 text-gray-700">insert fav items in future</p> */}
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
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default FavouritesModal;
