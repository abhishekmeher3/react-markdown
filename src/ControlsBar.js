import React, { Component } from 'react';
import './ControlsBar.css';

class ControlsBar extends Component {

    _handleKeyPress = (e) => {
        
          console.log(e);
        
      }
    render() {
        return (
            <div> <p>C<br/>O<br/>N<br/>T<br/>R<br/>O<br/>L<br/>S </p></div>
        );
    }
}

export default ControlsBar;
