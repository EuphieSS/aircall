import React from "react";
import FeatherIcon from "feather-icons-react";

const Button = (props) => {
  const { tab } = props;

  return (
    <button
    >
      {tab === "activity" ? 
        <div><FeatherIcon icon="folder-plus" size="16" /> archive all calls</div> : 
        <div><FeatherIcon icon="folder-minus" size="16" /> unarchive all calls</div>
      }
    </button>
  );
}

export default Button;