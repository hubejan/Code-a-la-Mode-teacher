// @flow
import React, { Component } from 'react';
import brace from 'brace';
import { ipcRenderer } from 'electron';
import Flexbox from 'flexbox-react';
// import Resizable from 'react-resizable-box';
import AceEditor from 'react-ace';
import SplitPane from 'react-split-pane';

import Paper from 'material-ui/Paper';
import { Tab, Tabs } from 'material-ui/Tabs';

import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/searchbox';
// import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';

import RightPanelContainer from '../containers/RightPanelContainer';
import EditorNavContainer from '../containers/EditorNavContainer';

import { getLastFromPath } from '../utils/file-functions';


/*
  Error with Webpack and how split is exported out, using require instead
  Keeping it here in case we might use it later

  const AceSplitEditor = require('react-ace').split;
*/
const style = {
  margin: 12,
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
          </Flexbox>

          <Flexbox flexDirection="row" justifyContent="space-around">
            <div position="relative">
              <SplitPane split="vertical" defaultSize="240" onChange={this.handleResize} >
                <Paper style={style} zDepth={2}>
                  <FiletreeContainer directory={'/'} socket={this.socket} />
                </Paper>
                  <Paper style={style} zDepth={2} >
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
                    <AceEditor
                      value={contents[selectedFileIndex]}
                      mode="javascript"
                      theme="monokai"
                      width={'100%'}
                      height="920"
                      onChange={(newValue, event) => { changeEditor(newValue, selectedFileIndex, contents)} }
                      name="UNIQUE_ID_OF_DIV"
                      wrapEnabled={true}
                      editorProps={{ $blockScrolling: Infinity }}
                      showPrintMargin={false}
                      defaultValue={`//      ,gggg,
//     ,88"""Y8b,                      8I
//    d8"     \`Y8                      8I
//   d8'   8b  d8                      8I
//  ,8I    "Y88P'                      8I
//  I8'             ,ggggg,      ,gggg,8I   ,ggg,
//  d8             dP"  "Y8ggg  dP"  "Y8I  i8" "8i
//  Y8,           i8'    ,8I   i8'    ,8I  I8, ,8I
//  \`Yba,,_____, ,d8,   ,d8'  ,d8,   ,d8b, \`YbadP'
//    \`"Y8888888 P"Y8888P"    P"Y8888P"\`Y8888P"Y888
//
//     ,gggg,gg
//    dP"  "Y8I
//   i8'    ,8I
//   d8,   ,d8b,
//   "Y8888P"\`Y8
//
//   ,dPYb,
//   IP'\`Yb
//   I8  8I
//   I8  8'
//   I8 dP    ,gggg,gg
//   I8dP    dP"  "Y8I
//   I8P    i8'    ,8I
//  ,d8b,_ ,d8,   ,d8b,
//  8P'"Y88P"Y8888P"\`Y8
//
//   ,ggg, ,ggg,_,ggg,
//  dP""Y8dP""Y88P""Y8b                       8I
//  Yb, \`88'  \`88'  \`88                       8I
//   \`"  88    88    88                       8I
//       88    88    88                       8I
//       88    88    88    ,ggggg,      ,gggg,8I   ,ggg,
//       88    88    88   dP"  "Y8ggg  dP"  "Y8I  i8" "8i
//       88    88    88  i8'    ,8I   i8'    ,8I  I8, ,8I
//       88    88    Y8,,d8,   ,d8'  ,d8,   ,d8b, \`YbadP'
//       88    88    \`Y8P"Y8888P"    P"Y8888P"\`Y8888P"Y888

`}
                    />
                  </Paper>
              </SplitPane>
            </div>
          </Flexbox>
        </Flexbox>
      </div>
    );
  }
}

export default Editor;
