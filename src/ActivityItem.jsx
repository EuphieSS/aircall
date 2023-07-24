import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Axios from "axios";

const ActivityItem = (props) => {
  const { id, caller, callType, direction, time, archived, toggleArchive } = props;

  // const [archive, setArchive] = useState(archived);

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

  // const toggleArchive = (id, archived) => {
  //   if (archived) {
  //     console.log("To Unarchive")
  //     return Axios
  //       .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: false})
  //       .then(res => {
  //         console.log(res);
  //         // setArchive(...archive, false)
  //       })
  //   } else {
  //     console.log("To Archive")
  //     return Axios
  //     .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: true})
  //     .then(res => {
  //       console.log(res);
  //       // setArchive(...archive, true)
  //     })
  //   }
  // }

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