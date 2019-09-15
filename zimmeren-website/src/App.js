import React from 'react';
import './App.css';

const linkedin = `<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="austin-s-zimmer"><a class="LI-simple-link" href='https://www.linkedin.com/in/austin-s-zimmer?trk=profile-badge'>Austin Zimmer</a></div>`;
const github = `<div class="github-card" data-github="zimmeren" data-width="400" data-height="" data-theme="default"></div>`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <span>zimmeren</span>
        <br/>
        <div dangerouslySetInnerHTML={{__html: linkedin}}></div>
        <br/>
        <div dangerouslySetInnerHTML={{__html: github}}></div>
      </header>
    </div>
  );
}

export default App;
