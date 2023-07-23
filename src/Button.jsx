import React from "react";
import FeatherIcon from "feather-icons-react";
import Axios from "axios";

const Button = (props) => {
  const { tab } = props;

  const unarchiveAll = () => {
      console.log("Unarchive All")
      return Axios
        .patch(`https://cerulean-marlin-wig.cyclic.app/reset`)
        .then(res => {
          console.log(res);
          // setArchive(...archive, false)
        })
  }

  return (
    <button
    >
      {tab === "activity" ? 
        <div><FeatherIcon icon="folder-plus" size="16" /> archive all calls</div> : 
        <div onClick={() => unarchiveAll()}><FeatherIcon icon="folder-minus" size="16" /> unarchive all calls</div>
      }
    </button>
  );
}

export default Button;