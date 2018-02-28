import React, { Component } from 'react';
import './ControlsBar.css';

class ControlsBar extends Component {


    constructor(props){
        super(props)
        this.onControlClicked.bind(this)
    }

    onControlClicked(type){
        this.props.onControlClicked(type)
    }
    render() {
        return (
            <div> 
                <button onClick = {e=> {this.onControlClicked('bold')}}>Bold</button> 
                <br/>
                <button onClick = {e=> {this.onControlClicked('italics')}}>Italics</button> 
                <p>C<br/>O<br/>N<br/>T<br/>R<br/>O<br/>L<br/>S </p>
            </div>
        );
    }
}

export default ControlsBar;
