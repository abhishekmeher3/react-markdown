import React, { Component } from 'react';
import './PreviewPane.css';
import Remarkable from 'remarkable';
import inlineCss from 'inline-css'
import html2pdf from 'html2pdf.js'

class PreviewPane extends Component {


    constructor(props) {
        super(props)
        this.remarkable = new Remarkable('full', {
            html: true,        // Enable HTML tags in source
            xhtmlOut: false,        // Use '/' to close single tags (<br />)
            breaks: true,        // Convert '\n' in paragraphs into <br>
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

    printMarkdown() {

        var source = this.remarkable.render(this.props.text);
        var sourceEd =
            `<html>
        <head> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/3.2.0/css/bootstrap.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/highlight.js/8.4.0/styles/solarized_light.min.css">
        </head> 
        <body>
        ${source}
        </body>
        </html>`

        let options = { url: 'http://localhost:3000', applyLinkTags: true }
        inlineCss(sourceEd, options)
            .then(function (html) {
                console.log(html)
                html2pdf(html, {
                    margin: 0.6,
                    filename: 'myfile.pdf',
                    html2canvas: { dpi: 192, letterRendering: true },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                });
            })

        console.log("print markdown in preview pane")
    }

    formatMarkDown(text, remarkable) {
        //let markedUpText = remarkable.render(text);
        return { __html: remarkable.render(text) };
    }

    render() {
        return (
            <div className="preview" ref={ref => this.previewArea = ref}
                dangerouslySetInnerHTML={this.formatMarkDown(this.props.text, this.remarkable)}
            />
        );
    }
}

export default PreviewPane;
