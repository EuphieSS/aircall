import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Header from './Header.jsx';

const App = () => {
  // const [calls, setCalls] = useState({});

  useEffect(() => {
    Promise.all([
      Axios.get("https://cerulean-marlin-wig.cyclic.app/activities") //because of the proxy in package.json, no need to include http://localhost:8001
    ]).then((all) => {
      console.log(all[0].data);
    });
  }, []);

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
