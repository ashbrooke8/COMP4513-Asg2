import { useState } from "react";
import NavBar from "../components/NavBar";
import ArtistList from "../components/ArtistList";
import ArtistInfo from "../components/ArtistInfo";
import PaintingsList from "../components/PaintingsList";

const ArtistsPage = (props) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

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
        <ArtistList
          artists={props.artists}
          onSelectArtist={setSelectedArtist}
        />
        <ArtistInfo artist={selectedArtist} addArtist={props.addArtist} removeArtist={props.removeArtist} favArtists={props.favArtists}/>
        <PaintingsList
          span="2"
          paintings={props.paintings}
          artist={selectedArtist}
          addPainting={props.addPainting}
          favPaintings={props.favPaintings}
          removePainting={props.removePainting}
        />
      </div>
    </div>
  );
};

export default ArtistsPage;
