import { useState } from "react";
import NavBar from "../components/NavBar";
import ArtistList from "../components/ArtistList";
import ArtistInfo from "../components/ArtistInfo";
import PaintingsList from "../components/PaintingsList";

const ArtistsPage = (props) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="bg-purple-100 min-h-screen font-mono">
      <NavBar />
      <div className="grid grid-cols-5 p-6 gap-4">
        <ArtistList artists={props.artists} onSelectArtist={setSelectedArtist} />
        <ArtistInfo artist={selectedArtist} />
        <PaintingsList span="2" paintings={props.paintings} artist={selectedArtist}/>
      </div>
    </div>
  );
};

export default ArtistsPage;
