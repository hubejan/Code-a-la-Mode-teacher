// @flow
export const LESSON_NAME_INPUT = 'LESSON_NAME_INPUT';

export const lessonNameChange = (event: Object) => (dispatch: *) => {
  dispatch({ type: LESSON_NAME_INPUT, newLessonName: event.target.value });
};

