import NavBar from "../components/NavBar";
import PaintingFilters from "../components/PaintingFilters";
import PaintingsPageList from "../components/PaintingsPageList";

const PaintingsPage = (props) => {
  return (
    <div className="bg-purple-100 min-h-screen font-mono">
      <NavBar
        favGalleries={props.favGalleries}
        favArtists={props.favArtists}
        favPaintings={props.favPaintings}
        removeArtist={props.removeArtist}
        removeGallery={props.removeGallery}
        removePainting={props.removePainting}
        removeAllFavourites={props.removeAllFavourites}
      />
      <div className="grid grid-cols-5 p-6 gap-4">
        <PaintingFilters artists={props.artists} galleries={props.galleries} />
        <PaintingsPageList
          span="4"
          paintings={props.paintings}
          addPainting={props.addPainting}
          removePainting={props.removePainting}
          favPaintings={props.favPaintings}
        />
      </div>
    </div>
  );
};

export default PaintingsPage;
