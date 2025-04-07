import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import ArtistsPage from "./pages/ArtistsPage";
import GalleriesPage from "./pages/GalleriesPage";
import PaintingsPage from "./pages/PaintingsPage";
import GenresPage from "./pages/GenresPage";

function App() {
  // should probably call all of the database stuff here and put it into local storage to be passed down to the other pages? maybe

  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [genres, setGenres] = useState([]);

  //when loading, this tries to get the value from the respective favourites in local storage, and if nothing is there, return an empty array
  const [favGalleries, setFavGalleries] = useState(() => {
    const storedGalleries = localStorage.getItem("favouriteGalleries");
    if (storedGalleries) {
      return JSON.parse(storedGalleries);
    } else {
      return [];
    }
  });
  const [favArtists, setFavArtists] = useState(() => {
    const storedArtists = localStorage.getItem("favouriteArtists");
    if (storedArtists) {
      return JSON.parse(storedArtists);
    } else {
      return [];
    }
  });
  const [favPaintings, setFavPaintings] = useState(() => {
    const storedPaintings = localStorage.getItem("favouritePaintings");
    if (storedPaintings) {
      return JSON.parse(storedPaintings);
    } else {
      return [];
    }
  });

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
      const updatedGalleries = [...favGalleries, gallery];
      localStorage.setItem(
        "favouriteGalleries",
        JSON.stringify(updatedGalleries)
      );
      setFavGalleries(updatedGalleries);
    }
  };

  const addArtist = (artist) => {
    if (!favArtists.some((fav) => fav.artistId === artist.artistId)) {
      const updatedArtists = [...favArtists, artist];
      localStorage.setItem("favouriteArtists", JSON.stringify(updatedArtists));
      setFavArtists(updatedArtists);
    }
  };

  const addPainting = (painting) => {
    if (!favPaintings.some((fav) => fav.paintingId === painting.paintingId)) {
      const updatedPaintings = [...favPaintings, painting];
      localStorage.setItem(
        "favouritePaintings",
        JSON.stringify(updatedPaintings)
      );
      setFavPaintings(updatedPaintings);
    }
  };

  //update the galleries with the non-selected attribute and set that to local storage and the state
  const removeGallery = (gallery) => {
    const updatedGalleries = favGalleries.filter((selectedGallery) => {
      return selectedGallery.galleryId !== gallery.galleryId;
    });
    localStorage.setItem(
      "favouriteGalleries",
      JSON.stringify(updatedGalleries)
    );
    setFavGalleries(updatedGalleries);
  };

  const removeArtist = (artist) => {
    const updatedArtists = favArtists.filter((selectedArtist) => {
      return selectedArtist.artistId !== artist.artistId;
    });
    localStorage.setItem("favouriteArtists", JSON.stringify(updatedArtists));
    setFavArtists(updatedArtists);
  };

  const removePainting = (painting) => {
    const updatedPaintings = favPaintings.filter((selectedPainting) => {
      return selectedPainting.paintingId !== painting.paintingId;
    });
    localStorage.setItem(
      "favouritePaintings",
      JSON.stringify(updatedPaintings)
    );
    setFavPaintings(updatedPaintings);
  };

  //removes all favourites from every local storage item and resets the state to an empty array
  const removeAllFavourites = () => {
    localStorage.removeItem("favouriteArtists");
    localStorage.removeItem("favouriteGalleries");
    localStorage.removeItem("favouritePaintings");
    setFavPaintings([]);
    setFavArtists([]);
    setFavGalleries([]);
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/artists"
        element={
          <ArtistsPage
            artists={artists}
            paintings={paintings}
            addArtist={addArtist}
            addPainting={addPainting}
            favGalleries={favGalleries}
            favArtists={favArtists}
            favPaintings={favPaintings}
            removeArtist={removeArtist}
            removeGallery={removeGallery}
            removePainting={removePainting}
            removeAllFavourites={removeAllFavourites}
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
            addPainting={addPainting}
            favGalleries={favGalleries}
            favArtists={favArtists}
            favPaintings={favPaintings}
            removeGallery={removeGallery}
            removeArtist={removeArtist}
            removePainting={removePainting}
            removeAllFavourites={removeAllFavourites}
          />
        }
      />
      <Route
        path="/paintings"
        element={
          <PaintingsPage
            paintings={paintings}
            artists={artists}
            galleries={galleries}
            favGalleries={favGalleries}
            favArtists={favArtists}
            addPainting={addPainting}
            removeGallery={removeGallery}
            removeArtist={removeArtist}
            removePainting={removePainting}
            removeAllFavourites={removeAllFavourites}
            favPaintings={favPaintings}
          />
        }
      />
      <Route
        path="/genres"
        element={
          <GenresPage
            genres={genres}
            paintings={paintings}
            addPainting={addPainting}
            removeGallery={removeGallery}
            removeArtist={removeArtist}
            removePainting={removePainting}
            removeAllFavourites={removeAllFavourites}
            favGalleries={favGalleries}
            favArtists={favArtists}
            favPaintings={favPaintings}
          />
        }
      />
    </Routes>
  );
}

export default App;
