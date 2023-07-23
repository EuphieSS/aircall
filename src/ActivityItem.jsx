import React from "react";

const ActivityItem = (props) => {
  const { caller, callType, direction } = props;

  return (
    <li>
      <h2>{caller}</h2>
      <h3>{callType}</h3>
      <h3>{direction}</h3>
    </li>
  );
}

export default ActivityItem;