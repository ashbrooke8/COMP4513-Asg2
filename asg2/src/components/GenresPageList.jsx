import { useState } from "react";
import PaintingDetails from "./PaintingDetails";

const GenresPageList = (props) => {
  const [sortType, setSortType] = useState("title");
  const [selectedPainting, setSelectedPainting] = useState(null);
  let filteredPaintings = [...props.paintings];

  const openPaintingDetails = (painting) => {
    setSelectedPainting(painting);
  };

  if (!props.genre) {
    return (
      <div
        className={`bg-white p-5 rounded-lg shadow-lg col-span-${props.span}`}
      >
        <h2 className="text-lg font-semibold text-indigo-600">Paintings</h2>
        <p className="text-gray-600">
          Please select an option to see paintings.
        </p>
      </div>
    );
  }

  if (props.genre && (!props.paintings || props.paintings.length === 0)) {
    return (
      <div
        className={`bg-white p-5 rounded-lg shadow-lg col-span-${props.span}`}
      >
        <h2 className="text-lg font-semibold text-indigo-600">Paintings</h2>
        {/* <p className="text-gray-600">This may take a few moments. Please wait...</p> */}
        <div className="flex justify-center">
        <img src="/loading.gif" alt="Loading..." className="w-16"/>
        </div>
      </div>
    );
  }

  filteredPaintings.sort((a, b) => {
    if (sortType === "artist") {
      return a.artist.lastName.localeCompare(b.artist.lastName);
    }
    if (sortType === "title") {
      return a.title.localeCompare(b.title);
    }
    if (sortType === "year") {
      return a.yearOfWork - b.yearOfWork;
    }
    return 0;
  });

  return (
    <div className={`bg-white p-5 rounded-lg shadow-lg col-span-${props.span}`}>
      <div className="flex justify-between mb-3 items-center">
        <h2 className="text-lg font-semibold text-indigo-600">Paintings</h2>
        <select
          name="sort"
          id="sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="artist">Sort by Artist</option>
          <option value="title">Sort by Title</option>
          <option value="year">Sort By Year</option>
        </select>
      </div>
      <div className="mt-4 space-y-4">
        {filteredPaintings.map((painting) => (
          <div
            key={painting.paintingId}
            className="flex items-center space-x-8 border-b pb-3"
          >
            <img
              src={"/paintings/square/" + painting.imageFileName + ".jpg"}
              alt={painting.title}
              className="w-32 h-32 rounded-md"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {painting.title}
              </p>
              <p className="text-gray-600">
                {painting.artist.firstName} {painting.artist.lastName}
              </p>
              <p className="text-gray-600">{painting.yearOfWork}</p>
              <button
                className="px-3 py-1 bg-indigo-400 text-white rounded-md hover:bg-indigo-600 transition"
                onClick={() => openPaintingDetails(painting)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedPainting && ( //if there is a selected painting, render PaintingDetails
        <PaintingDetails
          painting={selectedPainting}
          addPainting={props.addPainting}
          removePainting={props.removePainting}
          favPaintings={props.favPaintings}
          onClose={() => setSelectedPainting(null)} //resets selected painting, closing modal
        />
      )}
    </div>
  );
};

export default GenresPageList;
