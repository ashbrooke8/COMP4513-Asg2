import Map from "./Map.jsx";

const GalleryInfo = (props) => {
  if (!props.gallery) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-lg col-span-2">
        <h2 className="text-lg font-semibold text-indigo-600">Gallery Info</h2>
        <p className="text-gray-600">
          Please select an gallery to see details.
        </p>
      </div>
    );
  }

  //uses the some method to check if the gallery is favourited
  const isFavouriteGallery = props.favGalleries.some((fav) => {
    return fav.galleryId === props.gallery.galleryId;
  });

  const handleFavouritesClick = () => {
    if (isFavouriteGallery) {
      props.removeGallery(props.gallery);
      console.log("check");
    } else {
      props.addGallery(props.gallery);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-2">
      <h2 className="text-lg font-semibold text-indigo-600">Gallery Info</h2>
      <div className="mt-2 space-y-2">
        <p className="text-gray-700 text-lg">
          <strong>{props.gallery.galleryName}</strong> (
          {props.gallery.galleryNativeName})
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong> {props.gallery.galleryAddress},{" "}
          {props.gallery.galleryCity}, {props.gallery.galleryCountry}
        </p>
        <p className="text-gray-700">
          <strong>URL: </strong>
          <a href="#" className="text-indigo-500 hover:underline">
            {props.gallery.galleryWebSite}
          </a>
        </p>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-indigo-400 text-white rounded hover:bg-indigo-600 mb-4"
        onClick={handleFavouritesClick}
      >
        {isFavouriteGallery ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
      <Map
        latitude={props.gallery.latitude}
        longitude={props.gallery.longitude}
        zoom="13"
      />
    </div>
  );
};

export default GalleryInfo;
