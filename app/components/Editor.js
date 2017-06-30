// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import { ipcRenderer } from 'electron';
import Flexbox from 'flexbox-react';
import Resizable from 'react-resizable-box';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import 'brace/ext/searchbox';
import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';
import GitControlsContainer from '../containers/GitControlsContainer';

// ...

type nextPropsType = {
  contents: string,
  repositoryPath: string,
  changeEditor: () => void,
  storageLogin: () => Object
};

class Editor extends Component {
  props: {
    contents: string,
    repositoryPath: string,
    changeEditor: () => void,
    storageLogin: () => Object
  }

  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) return this.props.storageLogin(token);
  }

  componentWillReceiveProps(nextProps: nextPropsType) {
    ipcRenderer.send('editor-changes', nextProps.contents);
  }

  render() {
    const { changeEditor } = this.props;

    return (
      <Flexbox flexDirection="row" minHeight="100vh" flexWrap="wrap" alignContent="flex-start">
        <Flexbox element="header" height="70px" width="100vw">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <GitControlsContainer />
        </Flexbox>
        <Flexbox flexGrow={1} style={{ border: '1px solid gold', width: '5%', height: '90%' }}>
          <FiletreeContainer />
        </Flexbox>
        <Flexbox flexGrow={4} height={'90vh'} >
          <Resizable width={'100%'} height={'100%'}>
            <AceEditor
              mode="javascript"
              theme="solarized_dark"
              fontSize={15}
              width={"100%"}
              height={"100%"}
              onChange={changeEditor}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              showPrintMargin={false}
              value={this.props.contents}
              style={{ border: '1px solid gold' }}
              wrapEnabled={Boolean(true)}
            />
          </Resizable>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default Editor;
