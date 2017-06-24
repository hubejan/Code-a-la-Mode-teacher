export const GOT_USERNAME = 'GOT_USERNAME';


export const gotUsername = username => ({ type: GOT_USERNAME, username });
const username = require('username');

export function getUsername() {
  console.log('getting username');
  return (dispatch: (action: actionType) => void) => {
    username().then(name => dispatch(gotUsername(name)))
      .catch(console.error);
  };
}
