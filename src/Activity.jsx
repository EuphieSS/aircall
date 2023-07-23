import React from "react";

import ActivityItem from "./ActivityItem.jsx";

const Activity = (props) => {
  const { callHistory } = props;

  const calls = callHistory;
  const callArray = calls.map(item => {
    return (
      <ActivityItem
        key={item.id}
        caller={item.from}
        callType={item.call_type}
        direction={item.direction}
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