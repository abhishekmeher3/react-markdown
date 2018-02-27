import React, { Component } from 'react';
import './WritingPane.css';

class WritingPane extends Component {

    _handleKeyPress = (e) => {
        
          console.log(e);
        
      }
    render() {
        return (
            <textarea id="text-input" onKeyPress={this._handleKeyPress}  rows="30" cols="50">Type **Markdown** here.</textarea>
        );
    }
}

export default WritingPane;
