import React, { Component } from 'react';
import './ControlButton.css';

class ControlButton extends Component {


    constructor(props) {
        super(props)
        this.onButtonClicked.bind(this)
    }

    onButtonClicked(action) {
        this.props.onButtonClicked(action)
    }
    render() {
        return (
            <button className="control" onClick={e => { this.onButtonClicked(this.props.action) }}>
                <div>
                    <p className="controlIcon" dangerouslySetInnerHTML={{__html: this.props.icon}}/>
                   
                    <p className="controlText">{this.props.text}</p>
                </div>
            </button>
        );
    }
}

export default ControlButton;
