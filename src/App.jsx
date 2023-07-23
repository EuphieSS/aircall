import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Header from './Header.jsx';
import Activity from './Activity.jsx';

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

  return (
    <main className='container'>
      <Header/>
      <section className="container-view">
        <div>Activity</div>
        <Activity callHistory={calls.callHistory}/>
      </section>
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;