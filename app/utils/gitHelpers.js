import simplegit from 'simple-git';
import Promise from 'bluebird';

const git = simplegit();
const commit = Promise.promisify(git.commit);
const branch = Promise.promisify(git.branch);
// removes all punctuation, separates words with dashes
const branchifyQuestion = (question) =>
  question.replace(/[^\w\s]|_/g, '')
          .replace(/\s+/g, '-');

export const saveCommitAndBranch = (question) => {
  // saveEditedFiles();
  // git.commit('testing')
  branch([branchifyQuestion(question)]);
};
