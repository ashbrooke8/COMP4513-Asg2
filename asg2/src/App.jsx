import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import ArtistsPage from "./pages/ArtistsPage";
import GalleriesPage from "./pages/GalleriesPage";
import PaintingsPage from "./pages/PaintingsPage";
import GenresPage from "./pages/GenresPage";
// import FavouritesPage from "./pages/FavouritesPage";
// import AboutPage from "./pages/AboutPage";

function App() {
  // should probably call all of the database stuff here and put it into local storage to be passed down to the other pages? maybe

  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [genres, setGenres] = useState([]);
  const [favGalleries, setFavGalleries] = useState([]);
  const [favArtists, setFavArtists] = useState([]);
  const [favPaintings, setFavPaintings] = useState([]);

  const fetchData = (key, url, setter) => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      setter(JSON.parse(storedData));
    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setter(data);
          localStorage.setItem(key, JSON.stringify(data));
        })
        .catch((error) => console.log(`Error getting ${key}:`, error));
    }
  };

  useEffect(() => {
    fetchData(
      "artists",
      "https://comp4513-asg1.glitch.me/api/artists",
      setArtists
    );
    fetchData(
      "galleries",
      "https://comp4513-asg1.glitch.me/api/galleries",
      setGalleries
    );
    fetchData(
      "paintings",
      "https://comp4513-asg1.glitch.me/api/paintings",
      setPaintings
    );
    fetchData(
      "genres",
      "https://comp4513-asg1.glitch.me/api/genres",
      setGenres
    );
  }, []);

  const addGallery = (gallery) => {
    if (!favGalleries.some((fav) => fav.galleryId === gallery.galleryId)) {
      setFavGalleries([...favGalleries, gallery]);
      // console.log(favGalleries)
      console.log("save galleries");
    } else {
      console.log("already in favs");
    }
  };

  const addArtist = (artist) => {
    if (!favArtists.some((fav) => fav.artistId === artist.artistId)) {
      setFavArtists([...favArtists, artist]);
      console.log(favArtists);
      console.log("save artist");
    } else {
      console.log("already in favs");
      console.log(favArtists);
    }
  };

  const addPainting = (painting) => {
    if (!favPaintings.some((fav) => fav.paintingId === painting.paintingId)) {
      setFavPaintings([...favPaintings, painting]);
      console.log("save painting");
    } else {
      console.log("already in favs");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/artists"
        element={
          <ArtistsPage
            artists={artists}
            paintings={paintings}
            addArtist={addArtist}
          />
        }
      />
      <Route
        path="/galleries"
        element={
          <GalleriesPage
            galleries={galleries}
            paintings={paintings}
            addGallery={addGallery}
          />
        }
      />
      <Route
        path="/paintings"
        element={<PaintingsPage paintings={paintings} />}
      />
      <Route
        path="/genres"
        element={
          <GenresPage
            genres={genres}
            paintings={paintings}
            addPainting={addPainting}
          />
        }
      />
      {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}

export default App;
