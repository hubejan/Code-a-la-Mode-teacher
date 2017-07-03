import simplegit from 'simple-git'; // takes optional directory argument to find .git
import fs from 'fs';
import Promise from 'bluebird';
import store from '../index';
import { add as addTicket } from '../actions/tickets-actions';
import { addBranch } from '../actions/lessonsession-actions';

const fsWrite = Promise.promisify(fs.writeFile);

// removes all punctuation, separates words with dashes
const branchify = (question) =>
  question.replace(/[^\w\s]|_/g, '')
          .replace(/\s+/g, '-');

const saveToDisk = () => {
  const editorInfo = store.getState().editor;
  const editedPaths = editorInfo.currentOpenFiles;
  const editedContents = editorInfo.contents;
  const savedFiles = editedPaths.map((path, i) => fsWrite(editedPaths[i], editedContents[i]));
  return Promise.all(savedFiles);
};

  // will also want a prompt to save if a 'dirty' editor tab is closed
  // this save will only cover open files
export const saveCommitAndBranch = (question) => {
  const git = simplegit(store.getState().lessonSession.lessonInfo.repositoryPath);
  const branchName = branchify(question);

  return saveToDisk()
  .then(() => {
    git.add('./*')
      .commit(`question: ${question}`)
      .branch([branchName])
      .branch((err, branchSummary) => {
        const newBranch = branchSummary.branches[branchName];
        store.dispatch(addBranch(newBranch, branchName));
      });
    return store.dispatch(addTicket(question));
  })
  .catch(console.error);
};

