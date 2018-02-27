import React, { Component } from 'react';
import './PreviewPane.css';
import Remarkable from 'remarkable';

class PreviewPane extends Component {


    constructor(props){
        super(props)
        this.remarkable = new Remarkable('full', {
            html: false,        // Enable HTML tags in source
            xhtmlOut: false,        // Use '/' to close single tags (<br />)
            breaks: false,        // Convert '\n' in paragraphs into <br>
            langPrefix: 'language-',  // CSS language prefix for fenced blocks
            linkify: true,         // autoconvert URL-like texts to links
            linkTarget: '',           // set target to open link in

            // Enable some language-neutral replacements + quotes beautification
            typographer: false,

            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
            quotes: '“”‘’',
            _highlight: true,
            _strict: false,
            _view: 'html',
        });
    }


    formatMarkDown(text, remarkable){
        //let markedUpText = remarkable.render(text);
        return {__html: remarkable.render(text)};
    }

    render() {
        return (
            <div dangerouslySetInnerHTML = {this.formatMarkDown(this.props.text, this.remarkable)}/> 
        );
    }
}

export default PreviewPane;
