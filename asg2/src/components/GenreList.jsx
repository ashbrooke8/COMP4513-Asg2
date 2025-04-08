const GenreList = (props) => {
  const genres = Array.isArray(props.genres) ? props.genres : [];

  if (genres.length === 0) {
    return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-1">
      <h2 className="text-lg font-semibold text-indigo-600">Genres List</h2>
      {/* <p className="text-gray-600">Loading genres...</p> */}
      <div className="flex justify-center">
        <img src="/loading.gif" alt="Loading..." className="w-16"/>
        </div>
    </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-1">
      <h2 className="text-lg font-semibold text-indigo-600">Genres List</h2>
      <div className="mt-4 space-y-2">
        {genres.map((genre) => (
          <button
            key={genre.genreId}
            className="w-full px-4 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-700 transition"
            onClick={() => {
              props.onSelectGenre(genre);
              console.log(genre);
            }}
          >
            {genre.genreName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
