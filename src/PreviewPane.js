import React, { Component } from 'react';
import './PreviewPane.css';

class PreviewPane extends Component {

    _handleKeyPress = (e) => {
        
          console.log(e);
        
      }
    render() {
        return (
            <div> Preview </div>
        );
    }
}

export default PreviewPane;
