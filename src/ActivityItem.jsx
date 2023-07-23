import React from "react";

const ActivityItem = (props) => {
  const { caller, callType, direction, time, archived } = props;

  const shortTimeStamp = (time) => {
    const shortened = time.slice(0, 10);
    return shortened;
  }

  return (
    <div className="call-info">
      <div className="direction">{direction}</div>
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