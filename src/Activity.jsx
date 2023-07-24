import React from "react";

import ActivityItem from "./ActivityItem.jsx";

const Activity = (props) => {
  const { callHistory, tab, toggleArchive } = props;

  const callFilter = callHistory.filter(calls => {
    return tab === "archive" ? calls.is_archived : !calls.is_archived;
  });

  const callArray = callFilter.map(item => {
    return (
      <ActivityItem
        key={item.id}
        id={item.id}
        caller={item.from}
        callType={item.call_type}
        direction={item.direction}
        time={item.created_at}
        archived={item.is_archived}
        tab={tab}
        toggleArchive={toggleArchive}
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