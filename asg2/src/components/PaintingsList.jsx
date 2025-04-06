import { useState, useEffect } from "react";
import PaintingDetails from "./PaintingDetails";

const PaintingsList = (props) => {
  const [sortType, setSortType] = useState("title");
  const [selectedPainting, setSelectedPainting] = useState(null);
  let filteredPaintings = [...props.paintings];

  //watches the selected painting for a change and when it happens, rerender
  // useEffect(() => {
  //   const modal = document.getElementById("details_modal");
  //   if (modal) {
  //     modal.showModal();
  //     const handleClose = () => props.onClose();
  //     modal.addEventListener("close", handleClose);
  //   }
  //   return () => {
  //     modal.removeEventListener("close", handleClose)
  //     };
  //   }, []);

  // useEffect(() => {
  //   if (selectedPainting) {
  //     const modal = document.getElementById("details_modal");
  //     if (modal) modal.showModal();
  //   }
  // }, [selectedPainting]);

  const openPaintingDetails = (painting) => {
    setSelectedPainting(painting);
  };

  if (props.artist) {
    filteredPaintings = filteredPaintings.filter(
      (painting) => painting.artist.artistId === props.artist.artistId
    );
  }

  if (props.gallery) {
    filteredPaintings = filteredPaintings.filter(
      (painting) => painting.gallery.galleryId === props.gallery.galleryId
    );
  }

  if (!props.artist && !props.gallery) {
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

  let filterValues;
  if (props.artist) {
    filterValues = (
      <select
        name="sort"
        id="sort"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="border border-gray-300 rounded p-2"
      >
        <option value="title">Sort by Title</option>
        <option value="year">Sort By Year</option>
      </select>
    );
  } else {
    filterValues = (
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
    );
  }

  return (
    <div className={`bg-white p-5 rounded-lg shadow-lg col-span-${props.span}`}>
      <div className="flex justify-between mb-3 items-center">
        <h2 className="text-lg font-semibold text-indigo-600">Paintings</h2>
        {/* <select
          name="sort"
          id="sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="artist">Sort by Artist</option>
          <option value="title">Sort by Title</option>
          <option value="year">Sort By Year</option>
        </select> */}
        {filterValues}
      </div>
      <div className="mt-4 space-y-4">
        {filteredPaintings.map((painting) => (
          <div
            key={painting.paintingId}
            className="flex items-center space-x-8 border-b pb-3"
          >
            <img
              // src={`http://res.cloudinary.com/funwebdev/image/upload/w_250/art/paintings/${painting.imageFileName}.jpg`}
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
            {/* <PaintingDetails painting={painting}/> */}
          </div>
        ))}
      </div>
      {selectedPainting && ( //if there is a selected painting, render PaintingDetails
        <PaintingDetails
          painting={selectedPainting}
          addPainting={props.addPainting}
          removePainting={props.removePainting}
          favPaintings={props.favPaintings}
          paintings={props.paintings}
          onClose={() => setSelectedPainting(null)} //resets selected painting, closing modal
        />
      )}
    </div>
  );
};

export default PaintingsList;
