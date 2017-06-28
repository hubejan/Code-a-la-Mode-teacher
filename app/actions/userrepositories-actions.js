// import axios from 'axios';

// Defaults to current directory
// Need to pass in relevant project directory during operations
// const simpleGit = require('simple-git')();

// export const RECEIVED_USER_REPOS = 'RECEIVED_USER_REPOS';

// type actionType = {
//   type: string
// };

// const GITHUB_API_ROOT = 'https://api.github.com';

// export const getUserRepositories = (userToken: string) => (dispatch: *) => {
//   const config = {
//     headers: {
//       Authorization: `token ${userToken}`
//     }
//   };

//   // TODO: Dispatch this object to state
//   axios.get(`${GITHUB_API_ROOT}/user/repos`, config)
//     .then(userRepos => { // userRepos === Object {data: [...repository info]}
//       simpleGit
//         .clone(userRepos.data[0].html_url, `${__dirname}/testRepo`)
//         .exec(dispatch({ type: RECEIVED_USER_REPOS, repositories: userRepos.data }));
//     })
//     .catch(error => {
//       console.error(error);
//       // dispatch({ type: CLONE_FAILURE, error}); // TODO: Implement failure to clone project
//     });
// };

// export const receivedUserRepositories = (repositories: []) => ({ type: RECEIVED_USER_REPOS, repositories});

// export function loadUserRepositories(repositories: []) {
//   return (dispatch: (action: actionType) => void) => {
//     dispatch(receivedUserRepositories(repositories));
//   };
// }
