import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import PaintingFilters from "../components/PaintingFilters";
import PaintingsPageList from "../components/PaintingsPageList";

const PaintingsPage = (props) => {
  return (
    <div className="bg-purple-100 min-h-screen font-mono">
      <NavBar />
      <div className="grid grid-cols-5 p-6 gap-4">
        <PaintingFilters artists={props.artists} galleries={props.galleries} />
        <PaintingsPageList span="4" paintings={props.paintings} />

        {/* <p>haha paintings</p> */}
      </div>
    </div>
  );
};

export default PaintingsPage;
