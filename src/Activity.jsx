import React from "react";

import ActivityItem from "./ActivityItem.jsx";

const Activity = (props) => {
  const { callHistory } = props;

  const callArray = callHistory.map(item => {
    return (
      <ActivityItem
        key={item.id}
        id={item.id}
        caller={item.from}
        callType={item.call_type}
        direction={item.direction}
        time={item.created_at}
        archived={item.is_archived}
      />
    );
  });

  return (
    <ul>
      {callArray}
    </ul>
  );
}

export default Activity;