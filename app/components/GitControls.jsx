import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/av/skip-previous';
import Flexbox from 'flexbox-react';

import { green, warmBlack, cyan, magenta, orange} from '../public/colors'

const style = {
  margin: 12,
  borderRadius: 3

};

export default class GitControls extends Component {

  props: {
    token: string,
    repositoryPath: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    checkoutLessonBranch: () => void,
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
            checkoutLessonBranch,
            lessonInfo,
            saveLesson,
            currentOpenFiles,
            currentEditorValues } = this.props;

    return (
      <Flexbox flexDirection="row" justifyContent="flex-start"  >
        <RaisedButton
          onClick={() => { checkoutPreviousBranch(lessonInfo, currentOpenFiles, currentEditorValues); }}
          backgroundColor={warmBlack}
          style={style}
          label="Prev Branch"
          labelColor={cyan}
        >
        </RaisedButton>
        <RaisedButton
          onClick={() => { checkoutNextBranch(lessonInfo, currentOpenFiles, currentEditorValues); }}
          backgroundColor={warmBlack}
          style={style}
          label="Next Branch"
          labelColor={green}
        >
        </RaisedButton>
        <RaisedButton
          onClick={() => { checkoutLessonBranch(lessonInfo); }}
          backgroundColor={warmBlack}
          style={style}
          label="Lesson Branch"
          labelColor={orange}
        >
        </RaisedButton>
        <RaisedButton
          onClick={() => { saveLesson(repositoryPath, lessonInfo); }}
          backgroundColor={warmBlack}
          style={style}
          label="Save Lesson"
          labelColor={magenta}
        >
        </RaisedButton>
      </Flexbox>
    );
  }
}
