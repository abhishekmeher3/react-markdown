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
                        <b class="controlIcon">B</b>
                        <br />
                        <p class="controlText">**bold**</p>
                    </div>
                </button>
                <br />
                <button class="control" onClick={e => { this.onControlClicked('italics') }}>
                    <div>
                        <i class="controlIcon">I</i>
                        <br />
                        <p class="controlText">*italics*</p>
                    </div>
                </button>
                <button class="control" onClick={e => { this.onControlClicked('highlight') }}>
                    <div>
                        <mark class="controlIcon">hl</mark>
                        <br />
                        <p class="controlText">==highlight==</p>
                    </div>
                </button>
            </div>
        );
    }
}

export default ControlsBar;
