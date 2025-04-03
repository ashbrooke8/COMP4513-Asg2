import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import GenreList from "../components/GenreList";
import GenreInfo from "../components/GenreInfo";
import PaintingsList from "../components/PaintingsList";

const GenresPage = (props) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  //call /paintings/genres/:ref as a handler when an item in GenreList is selected

  return (
    <div className="bg-purple-100 min-h-screen font-mono">
      <NavBar
        favGalleries={props.favGalleries}
        favArtists={props.favArtists}
        favPaintings={props.favPaintings}
      />
      <div className="grid gap-4 p-6 grid-cols-5">
        <GenreList genres={props.genres} onSelectGenre={setSelectedGenre} />
        <div className="flex flex-col space-y-4 col-span-4">
          <GenreInfo genre={selectedGenre} />
          <PaintingsList
            span="4"
            paintings={props.paintings}
            genre={selectedGenre}
            addPainting={props.addPainting}
          />
        </div>
      </div>
    </div>
  );
};

export default GenresPage;
