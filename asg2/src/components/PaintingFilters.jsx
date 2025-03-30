const PaintingFilters = (props) => {
  return (
    <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
      <h2 className="text-lg text-indigo-600 mb-4 font-semibold">
        Painting Filters
      </h2>
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="filter"
            className="form-radio text-indigo-500"
          />
          <span className="text-gray-700">Title</span>
        </label>

        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter Title"
        />

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="filter"
            className="form-radio text-indigo-500"
          />
          <span className="text-gray-700">Artist</span>
        </label>

        <select className="w-full p-2 border rounded-md">
          <option>Select Artist</option>
        </select>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="filter"
            className="form-radio text-indigo-500"
          />
          <span className="text-gray-700">Gallery</span>
        </label>

        <select className="w-full p-2 border rounded-md">
          <option>Select Gallery</option>
        </select>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="filter"
            className="form-radio text-indigo-500"
          />
          <span className="text-gray-700">Year</span>
        </label>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Less</span>
          <input
            type="text"
            className="w-16 p-2 border rounded-md text-center"
            placeholder="YYYY"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Greater</span>
          <input
            type="text"
            className="w-16 p-2 border rounded-md text-center"
          />
        </div>

        <div className="flex mt-4 space-x-2">
          <button className="px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Clear
          </button>
          <button className="px-3 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-600">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintingFilters;
