import React, { Component } from 'react';
import './ControlsBar.css';
import ControlButton from './ControlButton';

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
                <ControlButton onButtonClicked={this.onControlClicked.bind(this)} action='bold' text='**bold**' icon='<b>B</b>' />
                <ControlButton onButtonClicked={this.onControlClicked.bind(this)} action='italics' text='*italics*' icon='<i>I</i>' />
                <ControlButton onButtonClicked={this.onControlClicked.bind(this)} action='highlight' text='==highlight==' icon='<mark>Hl</mark>' />
                <ControlButton onButtonClicked={this.onControlClicked.bind(this)} action='striked' text='~~strikred~~' icon='<del>abc</del>' />
                <ControlButton onButtonClicked={this.onControlClicked.bind(this)} action='underline' text='++underline++' icon='<ins>U</ins>' />

            </div>
        );
    }
}

export default ControlsBar;
