import React from "react";
import FeatherIcon from "feather-icons-react";

const ActivityItem = (props) => {
  const { id, caller, callType, direction, time, archived, toggleArchive } = props;

  const shortTimeStamp = (time) => {
    const shortened = time.slice(0, 10) + " " + time.slice(11, 16);
    return shortened;
  }

  const callDirection = (call) => {
    if (call === "inbound") {
      return <FeatherIcon icon="phone-incoming" size="18" color="forestgreen"/>
    } else if (call === "outbound") {
      return <FeatherIcon icon="phone-outgoing" size="18" color="dodgerblue"/>
    } else {
      return <FeatherIcon icon="phone" size="18" color="gray"/>
    }
  }

  return (
    <div className="call-info">
      <div className="direction">{callDirection(direction)}</div>
      <div className="detail">
        <div className="caller">{caller ? caller : "Unknown Caller"}</div>
        <div className="date-and-type">
          <div>{shortTimeStamp(time)}</div>
          <div>{callType}</div>
        </div>
      </div>
      <div
        className="archive"
        onClick={() => toggleArchive(id, archived)}
      >
        {archived ? <FeatherIcon icon="folder-minus" size="20" /> : <FeatherIcon icon="folder-plus" size="20" />}
      </div>
    </div>
  );
}

export default ActivityItem;