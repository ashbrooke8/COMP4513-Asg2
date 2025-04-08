const AboutModal = (props) => {
  return (
    <dialog id="about_modal" className="modal">
      <div className="flex flex-col modal-box h-[700px] max-w-[1200px] bg-purple-100 gap-4">
        <div className="flex justify-between gap-6">
          <h3 className="font-bold text-2xl text-gray-700">About</h3>
            <form method="dialog">
              <button className="px-4 py-2 text-white rounded hover:bg-indigo-600 bg-indigo-400">Close</button>
            </form>
        </div>
        <div className="flex flex-col gap-6 bg-white rounded p-4">
          <p className="text-gray-700 text-lg font-bold">
            Developed by Ashley Hunchak
          </p>
          <p className="text-gray-700">
            This is a React assignment for COMP 4513.
          </p>
          <p className="text-gray-700">
            {" "}
            Art Explorer is a single-page application that consists of different
            views to display fetched art data for different dashboard
            catagories.
          </p>
          <p className="text-gray-700 font-bold text-xl">Views</p>
          <ul>
            <li className="text-gray-700">
              <strong>Login:</strong> initial entry to the application.
            </li>
            <li className="text-gray-700">
              <strong>Artists:</strong> displays a list of artists that when
              selected, show more info and their paintings.
            </li>
            <li className="text-gray-700">
              <strong>Paintings:</strong> displays all paintings with filter and
              sort options.
            </li>
            <li className="text-gray-700">
              <strong>Galleries:</strong> displays a list of galleries that when
              selected, show more info and its paintings.
            </li>
            <li className="text-gray-700">
              <strong>Genres:</strong> displays a list of genres that when
              selected, show more info and its paintings.
            </li>
            <li className="text-gray-700">
              <strong>Favourites:</strong> displays lists of favourited artists,
              galleries, and paintings that can be removed.
            </li>
            <li className="text-gray-700">
              <strong>About:</strong> displays more information about the
              application and references.
            </li>
          </ul>
          <p className="text-gray-700 font-bold text-xl">
            External Components Used
          </p>
          <ul>
            <li className="text-gray-700">
              Modal component:{" "}
              <a
                href="https://daisyui.com/components/modal/"
                target="_blank"
                className="underline text-blue-600"
              >
                DaisyUI
              </a>
            </li>
            <li className="text-gray-700">
              Map component:{" "}
              <a
                href="https://react-leaflet.js.org"
                target="_blank"
                className="underline text-blue-600"
              >
                React Leaflet
              </a>
            </li>
          </ul>
          <p className="text-gray-700 font-bold text-xl">Sources/References</p>
          <ul>
            <li className="text-gray-700">
              Login background image:{" "}
              <a
                href="https://unsplash.com/photos/a-large-body-of-water-surrounded-by-trees-Ph0ReOHMBpY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                className="underline text-blue-600"
              >
                Photo on Unsplash by Heather Wilde
              </a>
            </li>
            <li className="text-gray-700">
              JavaScript Array Methods:{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" className="underline text-blue-600">MDN Web Docs</a>
            </li>
            <li className="text-gray-700">
              Array.isArray:{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank" className="underline text-blue-600">MDN Web Docs</a>
            </li>
            <li className="text-gray-700">
              Ternary operators:{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator" target="_blank" className="underline text-blue-600">MDN Web Docs</a>
            </li>
            <li className="text-gray-700">
              Optional chaining operator:{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank" className="underline text-blue-600">MDN Web Docs</a>
            </li>
            <li className="text-gray-700">
              useLocation:{" "}
              <a href="https://api.reactrouter.com/v7/functions/react_router.useLocation.html" target="_blank" className="underline text-blue-600">React Router API Reference</a>
            </li>
            <li className="text-gray-700">
              Vercel Rewrites:{" "}
              <a href="https://vercel.com/docs/rewrites">Vercel Docs</a>
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  );
};

export default AboutModal;
