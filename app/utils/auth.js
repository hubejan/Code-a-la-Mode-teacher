import { remote } from 'electron';
import gitAuth from './github.settings'; // obj with id, secret, scopes

export default function handleAuth(requestGithubToken) {
  const webPreferences = {
    nodeIntegration: false
  };

  let authWindow = new remote.BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences
  });

  const githubUrl = 'https://github.com/login/oauth/authorize?';
  const authUrl = `${githubUrl}client_id=${gitAuth.client_id}&scope=${gitAuth.scopes}`;
  authWindow.loadURL(authUrl);
  authWindow.show();

  const handleCallback = (url) => {
    // this is electron app, so callback url doesn't hit a server route or anything
    // extract authCode, which github appended to our fake callback url
    const rawCode = /code=([^&]*)/.exec(url) || null;
    const authCode = (rawCode && rawCode.length > 1) ? rawCode[1] : null;
    const error = /\?error=(.+)$/.exec(url);

    // Close the mini login-browser if auth code found or error
    if (authCode || error) {
      authWindow.destroy();
    }

    // If there is an auth code (supplied via callback url), get token from github
    if (authCode) {
      requestGithubToken(authCode);
    } else if (error) {
      alert('Oops! Something went wrong and we couldn\'t' +
        'log you in using Github. Please try again.');
    }
  };

  // handle response from github, handles first-time-login
  authWindow.webContents.on('will-navigate', (event, url) => {
    handleCallback(url);
  });

  // handles case where already logged into Github
  authWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
    handleCallback(newUrl);
  });

  // Reset the authWindow on close
  authWindow.on('close', () => { authWindow = null; }, false);
}
