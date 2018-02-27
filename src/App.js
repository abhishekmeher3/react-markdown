import React, { Component } from 'react';
import './App.css';
import './WritingPane'
import WritingPane from './WritingPane';
import PreviewPane from './PreviewPane';
import ControlsBar from './ControlsBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '' 
    };
    this.onControlClicked.bind(this)
  }

  onTextChanged (event){
    let s = this.state
    s.inputText = event
    this.setState(s)
  }

  onControlClicked(type){
    //console.dir(this.WritingPane)
    this.WritingPane.performAction(type, this.WritingPane)
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <ControlsBar onControlClicked= {this.onControlClicked.bind(this)}/>
        </div>
        <div className="left">
          <WritingPane onTextChanged= {this.onTextChanged.bind(this)} ref = {ref=> this.WritingPane = ref} text="aaa" />
        </div>
        <div className="right">
          <PreviewPane text = {this.state.inputText}/>
        </div>
      </div>
    );
  }
}

export default App;
