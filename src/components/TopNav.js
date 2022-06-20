import React from "react";

import plusIcon from "../assets/iconmonstr-plus-5.svg";


function TopNav({addNote}) {
  return (
    <div className="top_nav">
      <img src={plusIcon} alt="Add" onClick={() => addNote()} />
    </div>
  );
}

export default TopNav;
