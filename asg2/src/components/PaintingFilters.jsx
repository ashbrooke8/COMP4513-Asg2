import { useState } from "react";

const PaintingFilters = (props) => {
  const artists = Array.isArray(props.artists) ? props.artists : [];
  const galleries = Array.isArray(props.galleries) ? props.galleries : [];

  const [selectedFilter, setSelectedFilter] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [gallery, setGallery] = useState("");
  const [yearLess, setYearLess] = useState("");
  const [yearGreater, setYearGreater] = useState("");

  const handleFilter = () => {
    props.onFilter({
      selectedFilter,
      title,
      artist,
      gallery,
      yearLess,
      yearGreater,
    });
  };

  const handleClear = () => {
    setSelectedFilter("");
    setTitle("");
    setArtist("");
    setGallery("");
    setYearLess("");
    setYearGreater("");
    props.onClear?.(); // the ?. calls the function only if it exists
  };

  return (
    <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
      <h2 className="text-lg text-indigo-600 mb-4 font-semibold">
        Painting Filters
      </h2>
      <div className="space-y-3">
        <div className="flex gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="filter"
              className="form-radio text-indigo-500"
              value="title"
              checked={selectedFilter === "title"}
              onChange={() => setSelectedFilter("title")}
            />
            <span className="text-gray-700">Title</span>
          </label>

          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={selectedFilter !== "title"}
          />
        </div>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="filter"
              className="form-radio text-indigo-500"
              checked={selectedFilter === "artist"}
              onChange={() => setSelectedFilter("artist")}
              value="artist"
            />
            <span className="text-gray-700">Artist</span>
          </label>

          <select
            className="w-full p-2 border rounded-md"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            disabled={selectedFilter !== "artist"}
          >
            <option>Select Artist</option>
            {artists.map((artist) => (
              <option key={artist.artistId} value={artist.artistId}>
                {artist.firstName} {artist.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="filter"
              className="form-radio text-indigo-500"
              value="gallery"
              checked={selectedFilter === "gallery"}
              onChange={() => setSelectedFilter("gallery")}
            />
            <span className="text-gray-700">Gallery</span>
          </label>

          <select
            className="w-full p-2 border rounded-md"
            value={gallery}
            onChange={(e) => setGallery(e.target.value)}
            disabled={selectedFilter !== "gallery"}
          >
            <option>Select Gallery</option>
            {galleries.map((gallery) => (
              <option key={gallery.galleryId} value={gallery.galleryId}>
                {gallery.galleryName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="filter"
              className="form-radio text-indigo-500"
              value="year"
              checked={selectedFilter === "year"}
              onChange={() => setSelectedFilter("year")}
            />
            <span className="text-gray-700">Year</span>
          </label>
          <div className="flex flex-col space-y-1 ml-auto">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Less&nbsp;&nbsp;&nbsp;</span>
              <input
                type="text"
                className="w-16 p-2 border rounded-md text-center"
                placeholder="YYYY"
                value={yearLess}
                onChange={(e) => setYearLess(e.target.value)}
                disabled={selectedFilter !== "year"}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Greater</span>
              <input
                type="text"
                className="w-16 p-2 border rounded-md text-center"
                placeholder="YYYY"
                value={yearGreater}
                onChange={(e) => setYearGreater(e.target.value)}
                disabled={selectedFilter !== "year"}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-4 space-x-2 justify-end">
          <button
            className="px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="px-3 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-600"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintingFilters;
