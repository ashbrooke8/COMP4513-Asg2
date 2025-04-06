import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import GalleryList from "../components/GalleryList";
import GalleryInfo from "../components/GalleryInfo";
import PaintingsList from "../components/PaintingsList";

const GalleriesPage = (props) => {
  const [selectedGallery, setSelectedGallery] = useState(null);
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
      <div className="grid grid-cols-5 gap-4 p-6">
        <GalleryList
          galleries={props.galleries}
          onSelectGallery={setSelectedGallery}
        />
        <GalleryInfo gallery={selectedGallery} addGallery={props.addGallery} removeGallery={props.removeGallery} favGalleries={props.favGalleries} />
        <PaintingsList
          span="2"
          paintings={props.paintings}
          gallery={selectedGallery}
          addPainting={props.addPainting}
          removePainting={props.removePainting}
          favPaintings={props.favPaintings}
        />
      </div>
    </div>
  );
};

export default GalleriesPage;
