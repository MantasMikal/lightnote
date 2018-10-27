import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'react-codemirror';

const SCodeMirror = styled(CodeMirror)`
    height: 100%;
`

require('codemirror/lib/codemirror.css')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/python/python')
require('codemirror/mode/xml/xml')
require('codemirror/mode/markdown/markdown')
require('codemirror/theme/monokai.css')

class Editor extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let options = {
            node: 'markdown',
            theme: 'monokai'
        }

        return (
            <SCodeMirror value={this.props.value} options={options} height="100%"/>
        )
    }

}

export default Editor