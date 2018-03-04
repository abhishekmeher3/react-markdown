import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Toolbar.css'

class Toolbar extends Component {


  printMarkdown(){
    this.props.printMarkdown()
  }

  render() {
    return (
      <div className = 'toolbar'>
        <p className="title">R Markdown</p>
        <button onClick={this.printMarkdown.bind(this)}>To pdf </button>
      </div>
    );
  }
}

export default Toolbar;
