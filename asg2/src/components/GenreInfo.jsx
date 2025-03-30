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
        <p className="text-gray-700">
          <strong>Name:</strong> {props.genre.genreName}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong> {props.genre.description}
        </p>
        <p className="text-gray-700">
          <strong>URL:</strong>
          <a href="#" className="text-indigo-500 hover:underline">
          {props.genre.wikiLink}
          </a>
        </p>
      </div>
    </div>
  );
};

export default GenreInfo;
