import React, { Component } from 'react';
import './ControlsBar.css';

class ControlsBar extends Component {


    constructor(props) {
        super(props)
        this.onControlClicked.bind(this)
    }

    onControlClicked(type) {
        this.props.onControlClicked(type)
    }
    render() {
        return (
            <div>
                <button class="control" onClick={e => { this.onControlClicked('bold') }}>
                    <div>
                        <b class="controlIcon">b</b>
                        <br />
                        <p class="controlText"> bold</p>
                    </div>
                </button>
                <br />
                <button class="control" onClick={e => { this.onControlClicked('italics') }}><div>
                    <i class="controlIcon">i</i>
                    <br />
                    <p class="controlText"> italics</p>
                </div></button>
            </div>
        );
    }
}

export default ControlsBar;
