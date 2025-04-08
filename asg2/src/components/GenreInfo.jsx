const GenreInfo = (props) => {
  if(!props.genre) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-indigo-600">Genre Info</h2>
        <p className="text-gray-600">Please select a genre to see details.</p>
      </div>
    )
  }
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-indigo-600">Genre Info</h2>
      <div className="mt-2 space-y-2">
        <div className="flex gap-6">
        <div className="flex flex-col gap-4">
        <p className="text-gray-700 font-bold text-lg">
          {props.genre.genreName}
        </p>
        <p className="text-gray-700">
          {props.genre.description}
        </p>
        <p className="text-gray-700">
          <strong>URL:</strong>
          <a href={props.genre.wikiLink} className="text-indigo-500 hover:underline">
            Wikipedia
          </a>
        </p>
        </div>
        <div>
        <img
          src={"/genres/" + props.genre.genreId + ".jpg"}
          alt={props.genre.genreId}
          className="rounded-md w-400"
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default GenreInfo;
