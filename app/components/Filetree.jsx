// @flow
import React, { Component } from 'react';
import Resizable from 'react-resizable-box';

import ElectronTreeContainer from '../containers/ElectronTreeContainer';
import { selectedFileType } from '../actions/filetree-actions';


export default class Filetree extends Component {
  props: {
    loadInEditor: // eslint-disable-line flowtype/space-after-type-colon
    (
      selectedFile: selectedFileType,
      currentOpenFiles: Array<string>,
      currentEditorValues: Array<string>
    ) => void,
    dispatchGetUsername: () => void,
    path: string,
    currentBranch: string,
    currentOpenFiles: Array<string>,
    currentEditorValues: Array<string>,
    selectedFileIndex: number
  };

  componentDidMount() {
    // this.props.dispatchGetUsername();
  }

  render() {
    const { loadInEditor,
            path,
            currentBranch,
            currentOpenFiles,
            currentEditorValues,
            selectedFileIndex } = this.props;

    return (
      <Resizable width={'100%'} height={'100%'}>
        {
          currentBranch && <h3>{ currentBranch }</h3>
        }

        { /* Giving currentBranch as a prop to the FileTree component to force a re-render */ }
        <ElectronTreeContainer
          directory={'/home/hubert/Desktop/Fullstack/capstone/tmp/'}
          onFileClick={(selectedFile) => {
            loadInEditor(selectedFile, currentOpenFiles, currentEditorValues);
          }}
          currentBranch={currentBranch}
        />
      </Resizable>
    );
  }
}

