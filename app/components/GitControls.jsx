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
};

export default class GitControls extends Component {

  props: {
    token: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    lessonInfo: lessonInfoType
  };

  render() {
    const { token,
            checkoutNextBranch,
            checkoutPreviousBranch,
            lessonInfo } = this.props;

    return (
      <Flexbox flexDirection="row" justifyContent="flex-start" >
        <RaisedButton onClick={() => { checkoutPreviousBranch(lessonInfo); }} style={style} alignSelf="center">
          Previous branch
        </RaisedButton>
        <RaisedButton onClick={() => { checkoutNextBranch(lessonInfo); }} style={style} alignSelf="center">
          Next branch
        </RaisedButton>
      </Flexbox>
    );
  }
}
