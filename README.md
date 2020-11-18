# About The Project

A mobile-responsive user authentication (sign-in/out/up) application using React and Firebase. 
#### [Live Demo](https://sign-up-c83a6.web.app)

## Steps For cloning and starting the project on your local computer

For cloning and starting the project you have to follow 4 steps.

## 1/ Clone the repository

Open your terminal on the directory where you want to clone the project and run:
#### `git clone https://github.com/muhidhossain/sign-up.git`
This command will clone the project and after completing the process run:
#### `cd sign-up`
It will take you to the project directory.

## 2/ Install all dependency

To install all dependency run:
#### `yarn install`

## 3/ Create a `firebase.js` file under the `src` folder

Open [Firebase](https://firebase.google.com) and create a project on Firebase and register your app. Then go to project setting and copy the `Config`. And also Enable Email/Password Sign-in method from `Authentication` of your firebase project.

```
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "...............................",
    authDomain: ".................................",
    databaseURL: "..............................",
    projectId: ".....................",
    storageBucket: "...........................",
    messagingSenderId: "....................",
    appId: "................................."
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};
```
> Copy this code and replace the firebaseConfig with your Config and put it on firebase.js file under src folder.

## 4/ yarn start

Run the code:
#### `yarn start`
Now the project is ready to go.