import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Header from './Header.jsx';
import Tab from './Tab.jsx';

const App = () => {
  const [calls, setCalls] = useState({
    callHistory: []
  });

  useEffect(() => {
    Promise.all([
      Axios.get("https://cerulean-marlin-wig.cyclic.app/activities")
    ]).then((all) => {
      console.log(all[0].data)
      setCalls(prev => ({prev,
        callHistory: all[0].data
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
      console.log("To Unarchive")
      return Axios
        .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: false})
        .then(res => {
          console.log(res);
          setCalls({calls, callHistory});
        })
    } else {
      console.log("To Archive")
      return Axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {is_archived: true})
      .then(res => {
        console.log(res);
        setCalls({calls, callHistory});
      })
    }
  }

  const unarchiveAll = () => {
    const callHistory = [...calls.callHistory];

    for (let i = 0; i < callHistory.length; i++) {
      if (callHistory[i].is_archived) {
        callHistory[i].is_archived = false;
      }
    }    

    console.log("Unarchive All")
    return Axios
      .patch(`https://cerulean-marlin-wig.cyclic.app/reset`)
      .then(res => {
        console.log(res);
        setCalls({calls, callHistory});
      })
  }

  return (
    <main className='container'>
      <Header />
      <section className="container-view">
        <Tab 
          callHistory={calls.callHistory}
          toggleArchive={toggleArchive}
          unarchiveAll={unarchiveAll}
        />
      </section>
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;