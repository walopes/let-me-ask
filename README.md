# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Firebase connection

In order to connect to Firebase, create a file on the project's root folder, name `.env.local`, that should contains the following data:

```
# Firebase

REACT_APP_API_KEY="BezTkyDtu2-Urg0sPPiABCPttL6771C-acod798"
REACT_APP_AUTH_DOMAIN="project-demo-21013.firebaseapp.com"
REACT_APP_DATABASE_URL="https://project-demo-21013-default-rtdb.firebaseio.com"
REACT_APP_PROJECT_ID="project-demo-21013"
REACT_APP_STORAGE_BUCKET="project-demo-21013.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="499603662772"
REACT_APP_APP_ID="1:614426612885:web:7fg9b76d680523be88c80c"john@doe-
```

## Hosting with firebase

Install the package
```bash
# npm install -g firebase-tools
$ yarn global add firebase-tools
```

Then, start the firebase locally
```bash
$ firebase login
$ firebase init
```

Build the application
```bash
$ yarn build
```

```bash
$ firebase deploy
```

Project Console: `https://console.firebase.google.com/project/letmeask-demo-20961/overview`
Hosting URL: `https://letmeask-demo-20961.web.app`


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
