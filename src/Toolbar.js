import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Toolbar.css'

class Toolbar extends Component {


  printMarkdown(type){
    this.props.printMarkdown(type)
  }

  render() {
    return (
      <div className = 'toolbar'>
        <p className="title">R Markdown</p>
        <button id="topdf" onClick={this.printMarkdown.bind(this,'pdf')}>To pdf</button>
        <button id="topdf" onClick={this.printMarkdown.bind(this,'md')}>To .md</button>
        <button id="topdf" onClick={this.printMarkdown.bind(this,'html')}>To .html</button>
      </div>
    );
  }
}

export default Toolbar;
