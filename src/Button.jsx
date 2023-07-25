import React from "react";
import FeatherIcon from "feather-icons-react";

const Button = (props) => {
  const { tab, archiveAll, unarchiveAll } = props;

  return (
    <button>
      {
        tab === "activity" ? 
        <div onClick={() => archiveAll()}><FeatherIcon icon="folder-plus" size="16" /> archive all calls</div> : 
        <div onClick={() => unarchiveAll()}><FeatherIcon icon="folder-minus" size="16" /> unarchive all calls</div>
      }
    </button>
  );
}

export default Button;