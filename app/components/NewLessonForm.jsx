// @flow
import React, { Component } from 'react';

export default class NewLessonForm extends Component {
  props: {
    createNewLesson: () => void,
    token: string,
    newLessonName: string,
    lessonNameChange: () => void
  };

  render() {
    const { token, newLessonName, createNewLesson, lessonNameChange, history } = this.props;

    return (
      <form
        onSubmit={(e) => { createNewLesson(e, newLessonName, token, history); }}>
        <label>
          Lesson Name:
          <input type="text" value={newLessonName} onChange={(e) => { lessonNameChange(e); }} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

