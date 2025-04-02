const PaintingDetails = (props) => {
  return (
    <dialog id="details_modal" className="modal">
      <div className="modal-box h-[700px] max-w-[1200px]">
        <h3 className="font-bold text-lg text-gray-700">Painting Details</h3>
        <div className="flex gap-8">
          <div className="flex-shrink-0 w-[350px]">
            <img
              src={`http://res.cloudinary.com/funwebdev/image/upload/h_400/art/paintings/${props.painting.imageFileName}.jpg`}
              alt={props.painting.title}
              className="rounded-md"
            />
          </div>
          <div>
            <p className="text-gray-700 text-xl font-bold">
              {props.painting.title} ({props.painting.yearOfWork})
            </p>
            <p className="text-gray-700">
              {props.painting.artist.firstName} {props.painting.artist.lastName}
            </p>
            <p className="text-gray-700">Medium: {props.painting.medium}</p>
            <p className="text-gray-700">Width: {props.painting.width}</p>
            <p className="text-gray-700">Height: {props.painting.height}</p>
            <p className="text-gray-700">
              Located at {props.painting.gallery.galleryName} in{" "}
              {props.painting.gallery.galleryCity}
            </p>
            <p className="text-gray-700">{props.painting.description}</p>
            <p className="text-gray-700">
              Copyright: {props.painting.copyrightText}
            </p>
            <a
              href={props.painting.museumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              Museum
            </a>
            <a
              href={props.painting.wikiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              Wikipedia
            </a>
          </div>
        </div>
        <button
          class="mt-4 px-4 py-2 text-white rounded hover:bg-indigo-600 bg-indigo-400"
          onClick={() => alert("hi")}
        >
          Add to Favorites
        </button>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PaintingDetails;
