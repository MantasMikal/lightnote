import React, { Component } from 'react'
import styled from 'styled-components'
import Editor from './components/Editor'
import './App.css'

const Toolbar = styled('div')`
  width: 100%;
  height: 1.512rem;
`
const Button = styled('button')`
  width: 3rem;
  background-color: white;  
`

class App extends Component {
  constructor(props){
    super()
    this.state = {
      markdownSrc: '# Hey Hey Heey!'
    }
    
  }

  onButtonSave = (e) => {
    console.log(this.state.markdownSrc);
  }

  onMdChange = (md) => {
    this.setState({
      markdownSrc: md
    });
  }

  render() {
    return (
      <div className="App">
          <Toolbar><Button onClick={this.onButtonSave}>Save</Button></Toolbar>
          <Editor value={this.state.markdownSrc} onChange={this.onMdChange}/>
      </div>
    );
  }
}

export default App;
