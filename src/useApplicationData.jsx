import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const useApplicationData = () => {
  const [calls, setCalls] = useState({
    callHistory: []
  });

  useEffect(() => {
    Axios.get("https://cerulean-marlin-wig.cyclic.app/activities")
      .then((res) => {
        setCalls(prev => ({prev,
          callHistory: res.data
        }));
      });
  }, []);

  const toggleArchive = (id, archived) => {
    const callHistory = [...calls.callHistory];

    for (let i = 0; i < callHistory.length; i++) {
      if (callHistory[i].id === id) {
        callHistory[i].is_archived ? callHistory[i].is_archived = false : callHistory[i].is_archived = true;
      }
    }

    if (archived) {
      return Axios
        .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: false})
        .then(res => {
          setCalls({calls, callHistory});
        })
    } else {
      return Axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: true})
      .then(res => {
        setCalls({calls, callHistory});
      })
    }
  }

  const archiveAll = () => {
    const callHistory = [...calls.callHistory];
    let ids = [];

    for (let i = 0; i < callHistory.length; i++) {
      if (!callHistory[i].is_archived) {
        ids.push(callHistory[i].id);
        callHistory[i].is_archived = true;
      }
    }

    return Promise.all(
      ids.map(id => Axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: true}))
    )
      .catch(error => console.log(error))
      .then((all) => {
      setCalls({calls, callHistory});
      })
      
  }

  const unarchiveAll = () => {
    const callHistory = [...calls.callHistory];

    for (let i = 0; i < callHistory.length; i++) {
      if (callHistory[i].is_archived) {
        callHistory[i].is_archived = false;
      }
    }    

    return Axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/reset`)
      .then(res => {
        setCalls({calls, callHistory});
      })
  }

  return { calls, toggleArchive, archiveAll, unarchiveAll };
}

export default useApplicationData;