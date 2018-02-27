import React, { Component } from 'react';
import './WritingPane.css';

class WritingPane extends Component {

    constructor(props) {
        super(props)
        this.selectionInfo = { start: -1, end: -1 }
        this.state = { text: "" }
    }

    onTextChanged(event) {
        this.props.onTextChanged(event.target.value)
        this.setState({ text: event.target.value })
    }

    onSelect(event) {
        this.selectionInfo.start = event.target.selectionStart
        this.selectionInfo.end = event.target.selectionEnd
    }

    performAction(action) {

        let text = this.state.text;
        let start = text.substring(0, this.selectionInfo.start)
        let end = text.substring(this.selectionInfo.end, text.length)
        if (this.selectionInfo.end !== this.state.text.length) {
            
        }
        let selection = text.substring(this.selectionInfo.start, this.selectionInfo.end)
        selection = selection.replace(new RegExp('\\*\\*','g'), '')
        selection = "**" + selection + "**"
        this.props.onTextChanged(start + selection + end)
        this.setState({ text: start + selection + end }, () => {
            if (this.selectionInfo.start === this.selectionInfo.end) {
                this.textArea.focus()
                this.textArea.setSelectionRange(this.selectionInfo.start + 2, this.selectionInfo.start + 2);
            }
        })

    }


    render() {
        return (
            <textarea id="text-input"
                onChange={this.onTextChanged.bind(this)}
                onSelect={this.onSelect.bind(this)}
                rows="30"
                cols="50"
                placeholder="Your markup text here.."
                value={this.state.text}
                ref={ref => this.textArea = ref} />
        );
    }
}

export default WritingPane;
