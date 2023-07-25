import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Tab from './Tab.jsx';
import useApplicationData from './useApplicationData.jsx';

const App = () => {
  const { calls, toggleArchive, archiveAll, unarchiveAll } = useApplicationData();

  return (
    <main className='container'>
      <Header />
      <section className="container-view">
        <Tab 
          callHistory={calls.callHistory}
          toggleArchive={toggleArchive}
          archiveAll={archiveAll}
          unarchiveAll={unarchiveAll}
        />
      </section>
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;