import React, { Component } from 'react';
import './WritingPane.css';

class WritingPane extends Component {

    onTextChanged(event){
        this.props.onTextChanged(event.target.value)
    }

    render() {
        return (
            <textarea id="text-input" onChange={this.onTextChanged.bind(this)}  rows="30" cols="50">Type **Markdown** here.</textarea>
        );
    }
}

export default WritingPane;
