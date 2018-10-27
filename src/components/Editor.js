import React, { Component } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class Editor extends Component {
    constructor(props){
        super(props)
        this.updateCode = this.updateCode.bind(this);
    }
    
    updateCode(e) {
        this.props.onChange(e);
    }

    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ] 

    render() {
        console.log(this.formats)
        return (
            <ReactQuill 
            value={this.props.value} 
            onChange={this.updateCode} 
            modules={this.modules}
            formats={this.formats}
            />
        )
    }

}

export default Editor