import { readFile } from '../utils/FileSystemUtils';

const path = require('path');

const Git = require('nodegit');

// export const GOT_USERNAME = 'GOT_USERNAME';
// export const OPEN_FILE = 'OPEN_FILE';

type actionType = {
  type: string
};

// export const gotUsername = username => ({ type: GOT_USERNAME, username });
// export const openFile = contents => ({ type: OPEN_FILE, contents });


export function cloneRemoteRepository(repositoryLink: string) {
  Git.Clone(repositoryLink, 'testRepo')
    .then(repository => {
      console.log(`Cloned ${path.basename(repositoryLink)} to ${repository.workdir()}`);
      return repository.getCurrentBranch()
              .then(ref => repository.getBranchCommit(ref.shorthand()))
              .catch(error => console.error(error));
    })
    .then(commit => {
      const hist = commit.history();
      const histPromise = new Promise((resolve, reject) => {
        hist.on('end', resolve);
        hist.on('error', reject);
      });
      hist.start();
      return histPromise;
    })
    .then(commits => {
      commits.forEach((commit, index) => {
        const sha = commit[index].sha().substr(0, 7);
        const msg = commit[index].message().split('\n')[0];
        console.log(`${sha}  ${msg}`);
      });
    })
    .catch(error => {
      console.error(error);
    });
}
