import React, { useState } from "react";

import Activity from "./Activity.jsx";
import Button from "./Button.jsx";

const Tab = (props) => {
  const { callHistory, toggleArchive, archiveAll, unarchiveAll } = props;

  const [tab, setTab] = useState("activity");

  const toggleTab = (tabName) => {
    setTab(tabName);
  }

  return (
    <div>
      <div className="tab-options">
        <div
          className={tab === "activity" ? "active-tab" : "tabs"}
          onClick={() => toggleTab("activity")}
        >
          Activity
        </div>
        <div
          className={tab === "archive" ? "active-tab" : "tabs"}
          onClick={() => toggleTab("archive")}
        >
          Archive
        </div>
      </div>

      <Button tab={tab} archiveAll={archiveAll} unarchiveAll={unarchiveAll} />

      <div className="tab-content">
        <Activity
          callHistory={callHistory}
          tab={tab}
          toggleArchive={toggleArchive}
        />
      </div>
    </div>
  );
}

export default Tab;