import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PaintingFilters from "../components/PaintingFilters";
import PaintingsPageList from "../components/PaintingsPageList";

const PaintingsPage = (props) => {
  const [allPaintings, setAllPaintings] = useState([]);

  //initializes state with paintings from props, or makes it empty
  const [filteredPaintings, setFilteredPaintings] = useState(
    props.paintings || []
  );
  const [filterSelected, setFilterSelected] = useState(false);

  //updates filteredPaintings whenever the paintings change
  useEffect(() => {
    setAllPaintings(props.paintings || []);
    setFilteredPaintings(props.paintings || []);
    setFilterSelected(false);
  }, [props.paintings]);

  const handleFilter = (filter) => {
    const { selectedFilter, title, artist, gallery, yearLess, yearGreater } =
      filter;

    let result = [...allPaintings];

    //conditions to see what the selected filter is, then trimming down the paintings to match the condition
    if (selectedFilter === "title" && title.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(title.trim().toLowerCase())
      );
    }

    if (selectedFilter === "artist" && artist) {
      result = result.filter((p) => p.artist.artistId === parseInt(artist));
    }

    if (selectedFilter === "gallery" && gallery) {
      result = result.filter((p) => p.gallery.galleryId === parseInt(gallery));
    }

    if (selectedFilter === "year") {
      //ensures that they arent strings
      const less = parseInt(yearLess);
      const greater = parseInt(yearGreater);

      //these conditionals check that it is only less or greater, and that the number is.. a number. otherwise, notify the user. If the user puts a number in both fields, also notify
      if (yearLess && !yearGreater) {
        if (!isNaN(less)) {
          result = result.filter((p) => p.yearOfWork <= less);
        } else {
          alert("Please enter a valid number for 'Less than' year.");
          return;
        }
      } else if (yearGreater && !yearLess) {
        if (!isNaN(greater)) {
          result = result.filter((p) => p.yearOfWork >= greater);
        } else {
          alert("Please enter a valid number for 'Greater than' year.");
          return;
        }
      } else if (yearLess && yearGreater) {
        alert("Please only use one year filter: Less or Greater.");
        return;
      }
    }
    setFilterSelected(true);
    setFilteredPaintings(result);
  };

  const handleClear = () => {
    setFilterSelected(false);
    setFilteredPaintings(allPaintings);
  };

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
      <div className="grid grid-cols-4 p-6 gap-4">
        <PaintingFilters
          artists={props.artists}
          galleries={props.galleries}
          onFilter={handleFilter}
          onClear={handleClear}
        />
        <PaintingsPageList
          span="3"
          paintings={filteredPaintings}
          addPainting={props.addPainting}
          removePainting={props.removePainting}
          favPaintings={props.favPaintings}
          filterSelected={filterSelected}
        />
      </div>
    </div>
  );
};

export default PaintingsPage;
