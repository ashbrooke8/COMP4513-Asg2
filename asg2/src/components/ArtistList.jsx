const ArtistList = (props) => {
  const artists = Array.isArray(props.artists) ? props.artists : [];

  if (artists.length === 0) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-lg col-span-1">
        <h2 className="text-lg font-semibold text-indigo-600">Artist List</h2>
        <p className="text-gray-600">Loading artists...</p>
        {/* should make this a cool loading animation */}
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-1">
      <h2 className="text-lg font-semibold text-indigo-600">Artist List</h2>
      <div className="mt-2 space-y-2">
        {artists.map((artist) => (
          <button
            key={artist.artistId}
            className="w-full px-4 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-700 transition"
            onClick={() => props.onSelectArtist(artist)}
          >
            {artist.firstName} {artist.lastName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
