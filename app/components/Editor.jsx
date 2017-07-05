// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import brace from 'brace';
import { ipcRenderer } from 'electron';
import Flexbox from 'flexbox-react';
// import Resizable from 'react-resizable-box';
import AceEditor from 'react-ace';
import SplitPane from 'react-split-pane';

// Material-UI
import { Tabs, Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

// Required to get Material-UI tabs working
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import 'brace/ext/searchbox';
// import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';
import GitControlsContainer from '../containers/GitControlsContainer';
import { getFileName } from '../utils/file-functions';
import colors from '../public/colors';


/*
  Error with Webpack and how split is exported out, using require instead
  Keeping it here in case we might use it later

  const AceSplitEditor = require('react-ace').split;
*/

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
  }

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
      <Flexbox flexDirection="row" minHeight="100vh" minWidth="100vw" flexWrap="wrap" alignContent="flex-start">
        <Flexbox width="100vw" alignItems="center" >
          <AppBar style={{ width: '100%' }} showMenuIconButton={false}>
            <div style={titleStyles}>
              <span style={{ color: colors.cyan }}>Code </span>
              <span style={{ color: colors.green }}>à </span>
              <span style={{ color: colors.orange }}>la </span>
              <span style={{ color: colors.magenta }}>Mode</span>
            </div>
            <Tabs value={selectedFileIndex} >
              {
                currentOpenFiles && currentOpenFiles.map((filePath, index) => (
                  <Tab
                    key={filePath}
                    label={getFileName(filePath)}
                    value={index}
                    id={filePath} // TODO: Preferably not on id but this stops throwing an error for now
                    onActive={(tab) => loadFileFromTab(tab.props.id, currentOpenFiles, contents)}
                  />
                ))
              }
            </Tabs>
            <Link to="/">
              <i className="fa fa-arrow-left fa-2x" />
            </Link>
            <GitControlsContainer />
          </AppBar>
        </Flexbox>

        <Flexbox flexGrow={1} style={{ border: '1px solid tomato', width: '5%', height: '90%' }}>
          <FiletreeContainer />
        </Flexbox>
        <Flexbox>
          <SplitPane split="vertical" defaultSize="50vw" onChange={this.handleResize} >
            <AceEditor
              value={contents[selectedFileIndex]}
              mode="javascript"
              theme="solarized_dark"
              width={this.state.editorSize}
              onChange={(newValue, event) => { changeEditor(newValue, selectedFileIndex, contents); }}
              wrapEnabled={true}
              editorProps={{ $blockScrolling: Infinity }}
              name="UNIQUE_ID_OF_DIV"
              style={{ border: '1px solid silver' }}

            />
            <AceEditor
              wrapEnabled={Boolean(true)}
              onChange={(newValue, event) => { changeEditor(newValue, selectedFileIndex, contents); }}
              value={contents[selectedFileIndex]}
              mode="javascript"
              width={window.innerWidth - this.state.editorSize - 30}
              theme="solarized_dark"
              style={{ border: '1px solid gold' }}
              editorProps={{ $blockScrolling: Infinity }
              }
            />
          </SplitPane>
        </Flexbox>
        {/*<Flexbox flexGrow={4} height={'90vh'} >
          <AceEditor
            mode="javascript"
            // orientation="besides"
            theme="solarized_dark"
            value={contents[selectedFileIndex]}
            height={'100%'}
            width={'100%'}
            fontSize={15}
            onChange={(newValue, event) => { changeEditor(newValue, selectedFileIndex, contents); }}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={false}
            style={{ border: '1px solid gold' }}
            wrapEnabled={Boolean(true)}
          />
        </Flexbox>*/}

      </Flexbox>
    );
  }
}

export default Editor;
