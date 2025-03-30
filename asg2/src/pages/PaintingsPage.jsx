import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ArtistList from "../components/ArtistList";
import ArtistInfo from "../components/ArtistInfo";
import PaintingFilters from "../components/PaintingFilters";
import PaintingsList from "../components/PaintingsList";

const PaintingsPage = (props) => {
  return (
    <div className="bg-purple-100 min-h-screen font-mono">
      <NavBar />
      <div className="grid grid-cols-5 p-6 gap-4">
        <PaintingFilters />
        <PaintingsList span="4" paintings={props.paintings}/>

        {/* <p>haha paintings</p> */}
      </div>
    </div>
  );
};

export default PaintingsPage;
