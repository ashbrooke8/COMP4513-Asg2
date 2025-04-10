const ArtistInfo = (props) => {
  if (!props.artist) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-lg col-span-2">
        <h2 className="text-lg font-semibold text-indigo-600">Artist Info</h2>
        <p className="text-gray-600">Please select an artist to see details.</p>
      </div>
    );
  }

  //use some method to see if artist is favourited
  const isFavouriteArtist = props.favArtists.some((fav) => {
    return fav.artistId === props.artist.artistId;
  });

  const handleFavouritesClick = () => {
    if (isFavouriteArtist) {
      props.removeArtist(props.artist);
      console.log("check");
    } else {
      props.addArtist(props.artist);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-2">
      <div className="flex justify-between">
      <h2 className="text-lg font-semibold text-indigo-600">Artist Info</h2>
      <button
        className=" px-2 bg-indigo-400 text-white rounded hover:bg-indigo-600"
        onClick={handleFavouritesClick}
      >
        {isFavouriteArtist ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
      </div>
      <div className="mt-2 space-y-2">
        <p className="text-gray-700 font-extrabold text-lg">
          {props.artist.firstName} {props.artist.lastName}
        </p>
        <p className="text-gray-700">
          {props.artist.yearOfBirth} - {props.artist.yearOfDeath}
        </p>
        <p className="text-gray-700">
          <strong>Nationality:</strong> {props.artist.nationality}
        </p>
        <p className="text-gray-700">
          <strong>Gender:</strong>{" "}
          {props.artist.gender === "M" ? "Male" : "Female"}
        </p>
        <p className="text-gray-700">{props.artist.details}</p>
        <p className="text-gray-700">
          <strong>More Info: </strong>
          <a
            href={props.artist.artistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            Wikipedia
          </a>
        </p>
        {/* <button
          className="mt-4 px-4 py-2 text-white rounded hover:bg-indigo-600 bg-indigo-400"
          onClick={handleFavouritesClick}
        >
        {isFavouriteArtist ? "★ Remove from Favorites" : "☆ Add to Favorites"}</button> */}
        <img
          src={"/artists/full/" + props.artist.artistId + ".jpg"}
          alt={props.artist.artistId}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ArtistInfo;
