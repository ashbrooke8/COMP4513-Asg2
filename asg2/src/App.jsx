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

  const [artists, setArtists] = useState([])
  const [galleries, setGalleries] = useState([])
  const [paintings, setPaintings] = useState([])
  const [genres, setGenres] = useState([])
  const [favGalleries, setFavGalleries] = useState([])
  const [favArtists, setFavArtists] = useState([])
  const [favPaintings, setFavPaintings] = useState([])

  useEffect(() => {
    const storedArtists = localStorage.getItem("artists");

    if (storedArtists) {
      setArtists(JSON.parse(storedArtists));
    } else {
      fetch("https://comp4513-asg1.glitch.me/api/artists")
        .then((resp) => resp.json())
        .then((data) => {
          setArtists(data);
          localStorage.setItem("artists", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching artists:", error));
    }
  }, []);

  useEffect(() => {
    const storedGalleries = localStorage.getItem("galleries");

    if (storedGalleries) {
      setGalleries(JSON.parse(storedGalleries));
    } else {
      fetch("https://comp4513-asg1.glitch.me/api/galleries")
        .then((resp) => resp.json())
        .then((data) => {
          setGalleries(data);
          localStorage.setItem("galleries", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching galleries:", error));
    }
  }, []);

  useEffect(() => {
    const storedPaintings = localStorage.getItem("paintings");

    if (storedPaintings) {
      setPaintings(JSON.parse(storedPaintings));
    } else {
      fetch("https://comp4513-asg1.glitch.me/api/paintings")
        .then((resp) => resp.json())
        .then((data) => {
          setPaintings(data);
          localStorage.setItem("paintings", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching paintings:", error));
    }
  }, []);

  useEffect(() => {
    const storedGenres = localStorage.getItem("genres");

    if (storedGenres) {
      setGenres(JSON.parse(storedGenres));
    } else {
      fetch("https://comp4513-asg1.glitch.me/api/genres")
        .then((resp) => resp.json())
        .then((data) => {
          setGenres(data);
          localStorage.setItem("genres", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching genres:", error));
    }
  }, []);

  const addGallery = (gallery) => {
    if(!favGalleries.some((fav) => fav.galleryId === gallery.galleryId)) {
        setFavGalleries([...favGalleries, gallery])
        // console.log(favGalleries)
        console.log("save")
    }
    else {
      console.log("already in favs")
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/artists" element={<ArtistsPage artists={artists} paintings={paintings}/>} />
      <Route path="/galleries" element={<GalleriesPage galleries={galleries} paintings={paintings} addGallery={addGallery}/>} />
      <Route path="/paintings" element={<PaintingsPage paintings={paintings}/>} />
      <Route path="/genres" element={<GenresPage genres={genres} paintings={paintings}/>} />
      {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}

export default App;
