// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import brace from 'brace';
import { ipcRenderer } from 'electron';
import Flexbox from 'flexbox-react';
// import Resizable from 'react-resizable-box';
import AceEditor from 'react-ace';
import SplitPane from 'react-split-pane';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Tab, Tabs } from 'material-ui/Tabs';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import 'brace/ext/searchbox';
// import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';

import RightPanelContainer from '../containers/RightPanelContainer';
import EditorNavContainer from '../containers/EditorNavContainer';

import GitControlsContainer from '../containers/GitControlsContainer';
import { getLastFromPath } from '../utils/file-functions';
import colors from '../public/colors';


/*
  Error with Webpack and how split is exported out, using require instead
  Keeping it here in case we might use it later

  const AceSplitEditor = require('react-ace').split;
*/
const style = {
  margin: 12,
};
const titleStyles = {
  // a cool font could be nice- using Bones default to match student for now
  position: 'absolute',
  top: '10%',
  fontFamily: 'Monaco',
  fontSize: '35px'
};

type nextPropsType = {
  contents: Array<string>,
  repositoryPath: string,
  changeEditor: () => void,
  storageLogin: () => Object,
  selectedFileIndex: number,
  currEditorVal?: string
};

class Editor extends Component {
  props: {
    contents: Array<string>,
    repositoryPath: string,
    changeEditor: () => void,
    storageLogin: () => Object,
    currentOpenFiles: Array<string>,
    selectedFileIndex: number,
    loadFileFromTab: () => void,
    currEditorVal?: string
  };

  constructor(props) {
    super(props);
    this.state = { open: false, editorSize: '30vw', data: '', data2: ''};
  }

  componentWillMount() {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');
    if (token && username) return this.props.storageLogin(token, username); // eslint-ignore-line
  }

  componentWillReceiveProps(nextProps: nextPropsType) {

    ipcRenderer.send('editor-changes', nextProps.currEditorVal);
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  handleResize = (size) => this.setState({ editorSize: size });

  render() {
    const { changeEditor, contents, currentOpenFiles, selectedFileIndex, repositoryPath, loadFileFromTab } = this.props;

    return (
      <div>
        <RightPanelContainer />
        <Flexbox flexDirection="row" minHeight="100vh" flexWrap="wrap" alignContent="flex-start">
          <EditorNavContainer />
          <Flexbox element="header" height="70px" width="100vw">
            <Tabs value={selectedFileIndex} >
              {
                currentOpenFiles && currentOpenFiles.map((filePath, index) => (
                  <Tab
                    key={filePath}
                    label={getLastFromPath(filePath)}
                    value={index}
                    id={filePath} // TODO: Preferably not on id but this stops throwing an error for now
                    onActive={(tab) => loadFileFromTab(tab.props.id, currentOpenFiles, contents)}
                  />
                ))
              }
            </Tabs>
          </Flexbox>

          <Flexbox flexDirection="row" justifyContent="space-around">
            <div position="relative">
              <SplitPane split="vertical" defaultSize="240" onChange={this.handleResize} >
                <Paper style={style} zDepth={2}>
                  <FiletreeContainer directory={'/'} socket={this.socket} />
                </Paper>
                <SplitPane split="vertical" defaultSize="500" onChange={this.handleResize} >
                  <Paper style={style} zDepth={2} >
                    <AceEditor
                      value={contents[selectedFileIndex]}
                      mode="javascript"
                      theme="solarized_dark"
                      width={this.state.editorSize}
                      onChange={(newValue, event) => { changeEditor(newValue, selectedFileIndex, contents)} }
                      name="UNIQUE_ID_OF_DIV"
                      wrapEnabled={true}
                      editorProps={{ $blockScrolling: Infinity }}
                    />
                  </Paper>
                  <Paper style={style} zDepth={2} >
                    <AceEditor
                      wrapEnabled={Boolean(true)}
                      onChange={this.editor2Change}
                      mode="javascript"
                      width={window.innerWidth - this.state.editorSize - 30}
                      theme="solarized_dark"
                      editorProps={{ $blockScrolling: Infinity }
                      }
                    />
                  </Paper>
                </SplitPane>
              </SplitPane>
            </div>
          </Flexbox>
        </Flexbox>
      </div>
    );
  }
}

export default Editor;