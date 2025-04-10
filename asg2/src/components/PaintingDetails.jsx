import { useEffect } from "react";

const PaintingDetails = (props) => {
  //if the modal exists, show it and add the close event listener,
  useEffect(() => {
    const modal = document.getElementById("details_modal");
    const handleClose = () => props.onClose();
    if (modal) {
      modal.showModal();
      modal.addEventListener("close", handleClose);
    }
    return () => {
      //remove event listener when component unmounts
      modal.removeEventListener("close", handleClose);
    };
  }, []);

  //uses the some method to check if at least one of the paintings is favourited
  const isFavouritePainting = props.favPaintings.some((fav) => {
    return fav.paintingId === props.painting.paintingId;
  });

  //if the selected painting is already a favourite, call the remove function, otherwise, call add function
  const handleFavouritesClick = () => {
    if (isFavouritePainting) {
      props.removePainting(props.painting);
    } else {
      props.addPainting(props.painting);
    }
  };

  return (
    <dialog id="details_modal" className="modal">
      <div className="modal-box h-[700px] max-w-[1200px]">
        <h3 className="font-bold text-lg text-gray-700">Painting Details</h3>
        <div className="flex gap-8">
          <div className="flex-shrink-0 w-[350px]">
            <img
              src={"/paintings/full/" + props.painting.imageFileName + ".jpg"}
              alt={props.painting.title}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
              <p className="text-gray-700 text-xl font-bold">
                {props.painting.title} ({props.painting.yearOfWork})
              </p>
              <div className="flex gap-4">
              <button className="mt-4 px-4 py-2 text-white rounded hover:bg-indigo-600 bg-indigo-400" onClick={handleFavouritesClick}>
                {isFavouritePainting ? "★ Remove from Favorites" : "☆ Add to Favorites"}
              </button>
              <form method="dialog">
                <button className="mt-4 px-4 py-2 text-white rounded hover:bg-indigo-600 bg-indigo-400">Close</button>
              </form>
              </div>
            </div>
            <p className="text-gray-700 font-bold">
              {props.painting.artist.firstName} {props.painting.artist.lastName}
            </p>
            <p className="text-gray-700">
              <strong>Medium: </strong>
              {props.painting.medium}
            </p>
            <p className="text-gray-700">
              <strong>Size: </strong>
              {props.painting.width}cm x {props.painting.height}cm
            </p>
            <p className="text-gray-700">
              Located at {props.painting.gallery.galleryName} in{" "}
              {props.painting.gallery.galleryCity}
            </p>
            <p className="text-gray-700">{props.painting.description}</p>
            <div>
              <h3 className="font-bold text-lg mb-2">Dominant Colors</h3>
              <div className="flex gap-2">
                {props.painting.jsonAnnotations.dominantColors.map(
                  (color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 border rounded"
                      style={{ backgroundColor: color.web }}
                    />
                  )
                )}
              </div>
            </div>
            <p className="text-gray-700">
              Copyright: {props.painting.copyrightText}
            </p>
            <div>
            {props.painting.museumLink ? (
              <a
                href={props.painting.museumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                Museum&nbsp;&nbsp;
              </a>
            ):(
              <span className="text-gray-700">No Museum Link</span>
            )}
            {props.painting.wikiLink ? (
              <a
                href={props.painting.wikiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                Wikipedia
              </a>
              ):(
                <span className="text-gray-700">No Wikipedia Link</span>
              )}
            </div>
          </div>
        </div>
        <div className="modal-action"></div>
      </div>
    </dialog>
  );
};

export default PaintingDetails;
