// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';
import GitControlsContainer from '../containers/GitControlsContainer';
import { ipcRenderer } from 'electron';
import Flexbox from 'flexbox-react';

// ...

type nextPropsType = {
  contents: string,
  changeEditor: () => void
};

class Editor extends Component {
  props: {
    contents: string,
    changeEditor: () => void
  }

  componentWillReceiveProps(nextProps: nextPropsType) {
    ipcRenderer.send('editor-change', nextProps.contents);
  }

  render() {
    const { changeEditor, userRepositories } = this.props;

    return (
      <Flexbox flexDirection="row" minHeight="100vh" flexWrap="wrap">
        <Flexbox element="header" height="60px" width="100vw">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <GitControlsContainer />
        </Flexbox>

        <Flexbox flexGrow={1}>
          <FiletreeContainer className={styles.container} />
        </Flexbox>
        <Flexbox flexGrow={1}>
          <AceEditor
            mode="javascript"
            theme="solarized_dark"
            fontSize={15}
            width="68vw"
            height="90vh"
            onChange={changeEditor}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true}}
            showPrintMargin={false}
            value={this.props.contents}
            style={{ border: '1px solid gold' }}
            wrapEnabled={true}
          />
        </Flexbox>

      </Flexbox>
    );
  }
}

export default Editor;
