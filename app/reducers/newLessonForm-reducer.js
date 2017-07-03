// @flow
import { LESSON_NAME_INPUT } from '../actions/newlessonform-actions';

const defaultNewLessonFormState = {
  newLessonName: ''
};

type actionType = {
  type: string,
  newLessonName?: string
};

export type newLessonFormStateType = {
  newLessonName: string
};

export default function newLessonForm(state: newLessonFormStateType = defaultNewLessonFormState, action: actionType){
  switch (action.type) {
    case LESSON_NAME_INPUT:
      return { ...state, newLessonName: action.newLessonName };
    default:
      return state;
  }
}
