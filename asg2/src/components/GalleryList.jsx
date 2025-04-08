const GalleryList = (props) => {
  const galleries = Array.isArray(props.galleries) ? props.galleries : [];

  if (galleries.length === 0) {
    return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-1">
        <h2 className="text-lg font-semibold text-indigo-600">Gallery List</h2>
        {/* <p className="text-gray-600">Loading galleries...</p> */}
        <div className="flex justify-center">
        <img src="/loading.gif" alt="Loading..." className="w-16"/>
        </div>
    </div>
    );
  }
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg col-span-1">
      <h2 className="text-lg font-semibold text-indigo-600">Gallery List</h2>
      <div className="mt-2 space-y-2">
        {galleries.map(
          (gallery) => (
            <button
              key={gallery.galleryId}
              className="w-full px-4 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-700 transition"
              onClick={() => props.onSelectGallery(gallery)}
            >
              {gallery.galleryName}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default GalleryList;
