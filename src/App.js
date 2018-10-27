import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import styled from 'styled-components';
import Editor from './components/Editor'
import './App.css';

const EditorPane = styled('div')`
  height: 100%;
`

const ViewPane = styled('div')`

`
class App extends Component {
  constructor(props){
    super()
    this.state = {
      markdownSrc: '# Hey Hey Heey!'
    }
  }


  render() {
    return (
      <div className="App">
        <SplitPane defaultSize="50%" split="vertical">
          <ViewPane> </ViewPane>
          <EditorPane>
            <Editor value={this.state.markdownSrc} />
          </EditorPane>
        </SplitPane>

      </div>
    );
  }
}

export default App;
