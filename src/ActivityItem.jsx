import React from "react";
import FeatherIcon from "feather-icons-react";

const ActivityItem = (props) => {
  const { caller, callType, direction, time, archived } = props;

  const shortTimeStamp = (time) => {
    const shortened = time.slice(0, 10);
    return shortened;
  }

  const callDirection = (call) => {
    if (call === "inbound") {
      return <FeatherIcon icon="phone-incoming" size="18" />
    } else if (call === "outbound") {
      return <FeatherIcon icon="phone-outgoing" size="18" />
    } else {
      return <FeatherIcon icon="phone" size="18" />
    }
  }

  return (
    <div className="call-info">
      <div className="direction">{callDirection(direction)}</div>
      <div className="detail">
        <div>{caller ? caller : "Unknown Caller"}</div>
        <div className="date-and-type">
          <div>{shortTimeStamp(time)}</div>
          <div>{callType}</div>
        </div>
      </div>
      <div className="archive">Arch</div>
    </div>
  );
}

export default ActivityItem;