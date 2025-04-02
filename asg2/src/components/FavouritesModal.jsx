const FavouritesModal = () => {
  return (
    <dialog id="favourites_modal" className="modal">
      <div className="modal-box h-[700px] max-w-[1200px] bg-purple-100">
        <h3 className="font-bold text-xl text-gray-700">Favourites</h3>
        {/* <p className="py-4 text-gray-700">insert fav items in future</p> */}
        <div className="grid grid-cols-3 p-6 gap-6">
          <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
            <p className="font-bold text-lg text-gray-700">Galleries</p>
          </div>
          <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
            <p className="font-bold text-lg text-gray-700">Artists</p>
          </div>
          <div className="bg-white p-5 rounded-lg col-span-1 shadow-lg">
            <p className="font-bold text-lg text-gray-700">Paintings</p>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default FavouritesModal;
