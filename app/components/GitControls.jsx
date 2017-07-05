import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/av/skip-previous';
import Flexbox from 'flexbox-react';

const style = {
  margin: 12,
  borderRadius: 3,
  color: 'white'
};

export default class GitControls extends Component {

  props: {
    token: string,
    repositoryPath: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    saveLesson: () => void,
    lessonInfo: lessonInfoType,
    currentOpenFiles: Array<string>,
    currentEditorValues: Array<string>
  };

  render() {
    const { token,
            repositoryPath,
            checkoutNextBranch,
            checkoutPreviousBranch,
            lessonInfo,
            saveLesson,
            currentOpenFiles,
            currentEditorValues } = this.props;

    return (
      <Flexbox flexDirection="row" justifyContent="flex-start"  >
        <RaisedButton onClick={() => { checkoutPreviousBranch(lessonInfo, currentOpenFiles, currentEditorValues); }} style={style} alignSelf="center">
          Previous branch
        </RaisedButton>
        <RaisedButton onClick={() => { checkoutNextBranch(lessonInfo, currentOpenFiles, currentEditorValues); }} style={style} alignSelf="center">
          Next branch
        </RaisedButton>
        <RaisedButton onClick={() => {
          saveLesson(currentOpenFiles, currentEditorValues)
            .then(() => console.log('Saved!'))
            .catch(error => console.error(error));
        }}
        style={style}
        >
          Save Lesson
        </RaisedButton>
      </Flexbox>
    );
  }
}
