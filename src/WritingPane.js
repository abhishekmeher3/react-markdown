import React, { Component } from 'react';
import './WritingPane.css';

class WritingPane extends Component {

    constructor(props){
        super(props)
        this.initialText = "Your **text** here";
        this.selectionInfo = {start:-1,end:-1}
        this.state= {text: this.initialText}
    }

    onTextChanged(event){
        this.props.onTextChanged(event.target.value)
        this.setState({text:event.target.value})
    }

    onSelect(event){
        this.selectionInfo.start = event.target.selectionStart
        this.selectionInfo.end = event.target.selectionEnd
    }

    performAction(action, thing){
        if(this.selectionInfo.start == this.selectionInfo.end){
            
        }
        else{
            let text = this.state.text;
            let start = text.substring(0,this.selectionInfo.start)
            let end = text.substring(this.selectionInfo.end, text.length-1)
            let selection = text.substring(this.selectionInfo.start, this.selectionInfo.end)
            selection = "**"+selection+"**"
            this.props.onTextChanged(start+selection+end)
            this.setState({text: start+selection+end})
        }
    }

 
    render() {
        return (
            <textarea id="text-input" 
            onChange={this.onTextChanged.bind(this)} 
            onSelect={this.onSelect.bind(this)}
            rows="30"
            cols="50"
            value = {this.state.text}/>
        );
    }
}

export default WritingPane;
