const FavouritesModal = () => {
    return (
      <dialog id="favourites_modal" className="modal">
        <div className="modal-box h-[500px] max-w-[900px]">
          <h3 className="font-bold text-lg text-gray-700">Favourites</h3>
          <p className="py-4 text-gray-700">insert fav items in future</p>
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
  