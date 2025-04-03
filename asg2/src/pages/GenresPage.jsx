import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import GenreList from "../components/GenreList";
import GenreInfo from "../components/GenreInfo";
import PaintingsList from "../components/PaintingsList";

const GenresPage = (props) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genrePaintings, setGenrePaintings] = useState([]);

  //call /paintings/genres/:ref as a handler when an item in GenreList is selected
  useEffect(() => {
    if (!selectedGenre) return;
    let url = `https://comp4513-asg1.glitch.me/api/paintings/genre/${selectedGenre.genreId}`;
    console.log("check");
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setGenrePaintings(data);
      })
      .catch((err) => {
        console.error("Error detching paintings: ", err);
      });
  }, [selectedGenre]);

  console.log("genrePaintings fetched:", genrePaintings);

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
            paintings={genrePaintings}
            genre={selectedGenre}
            // isGenre = {true}
            addPainting={props.addPainting}
          />
        </div>
      </div>
    </div>
  );
};

export default GenresPage;
