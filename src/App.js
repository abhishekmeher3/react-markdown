import React, { Component } from 'react';
import './App.css';
import './WritingPane'
import WritingPane from './WritingPane';
import PreviewPane from './PreviewPane';
import ControlsBar from './ControlsBar';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <ControlsBar/>
        </div>
        <div className="left">
          <WritingPane/>
        </div>
        <div className="left">
          <PreviewPane/>
        </div>
      </div>
    );
  }
}

export default App;
