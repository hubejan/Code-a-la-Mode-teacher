import { readFile } from '../utils/FileSystemUtils';

const path = require('path');

const Git = require('simple-git');

// export const GOT_USERNAME = 'GOT_USERNAME';
// export const OPEN_FILE = 'OPEN_FILE';

type actionType = {
  type: string
};

// export const gotUsername = username => ({ type: GOT_USERNAME, username });
// export const openFile = contents => ({ type: OPEN_FILE, contents });


export function cloneRemoteRepository(repositoryLink: string) {

}
