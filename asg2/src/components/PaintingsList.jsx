const PaintingsList = (props) => {
  let filteredPaintings = [...props.paintings];

  if (props.artist) {
    filteredPaintings = filteredPaintings.filter(painting => painting.artist.artistId === props.artist.artistId);

  }

  if(props.gallery) {
    filteredPaintings = filteredPaintings.filter(painting => painting.gallery.galleryId === props.gallery.galleryId);
  }

  if(!props.artist && !props.gallery) {
    return (
      <div className={`bg-white p-5 rounded-lg shadow-lg col-span-${props.span}`}>
        <h2 className="text-lg font-semibold text-indigo-600">Paintings</h2>
        <p className="text-gray-600">Please select an option to see paintings.</p>
      </div>
    )
  }

  return (
    <div className={`bg-white p-5 rounded-lg shadow-lg col-span-${props.span}`}>
      <h2 className="text-lg font-semibold text-indigo-600">Paintings</h2>
      <div className="mt-4 space-y-4">
        {filteredPaintings.map((painting, index) => (
          <div
            key={index}
            className="flex items-center space-x-8 border-b pb-3"
          >
            <img
              src={`http://res.cloudinary.com/funwebdev/image/upload/w_250/art/paintings/${painting.imageFileName}.jpg`}
              alt={painting.title}
              className="w-16 h-16 rounded-md"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {painting.title}
              </p>
              <p className="text-gray-600">{painting.artist.firstName} {painting.artist.lastName}</p>
              <p className="text-gray-600">{painting.yearOfWork}</p>
              <button className="px-3 py-1 bg-indigo-400 text-white rounded-md hover:bg-indigo-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingsList;
