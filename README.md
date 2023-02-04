# Text Editor 

## Table of Contents
- [Text Editor](#text-editor)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [User Story](#user-story)
  - [Installation](#installation)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Usage](#usage)
  - [Screenshot of Application](#screenshot-of-application)
  - [Repository](#repository)
  - [Deployed Application](#deployed-application)
  - [Author](#author)


## Description

This is a text editing app that meets Progressive Web App (PWA) criteria.  This type of application is able to be used in a broswer window either on or off-line.  Is is able to be used off-line with local-storage on the user's device.

## User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Installation

This text editor requires a number of dependencies and installation methods to to able to function.

Node Package Manager (NPM) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. NPM makes it easy to install, update and manage packages for your projects, as well as share your own packages with the community. With NPM, you can install packages from the npm registry or from a local or remote file system.

This application uses the following npm packages:

  `* npm install express (express.js)`<br>
  `* npm install babel (Babel)`<br>
  `* npm install --save-dev css-loader (CSS-loader)`<br>
  `* npm install --save-dev webpack (Webpack)`<br>
  `* npm install webpack-dev-server --save-dev (webpack-dev-server)`<br>
  `* npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)`<br>
  `* npm install concurrently --save (run multiple commands concurrently.) (Concurrently)`<br>
  `* npm npm install idb (IndexedDB)`


The modules that are installed with the above commands are bundled in the app's package.json files and will be installed with the command npm run install.

## Acceptance Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application.

## Usage

To use the application from the command line (after installing dependencies):

Open the root directory of the repository in your terminal or bash.
Bundle the front-end code by entering npm run build in the command line.
Start the server by entering npm run start in the command line.
Go to the port on your local host.
Click the "Install" button.

Alternatively, to use the live application, click here.

## Screenshot of Application

![Alt text](Develop/client/dist/assets/icons/J.A.T.E.png)

## Repository 

The repo for this application can be found: [Here](https://github.com/Dpro03/Text-Editor.git)

## Deployed Application

The live application is deployed to Heroku.  To access it, click [Here]()

## Author

David Proto

Click [HERE](https://github.com/Dpro03) to visit my GitHub page!

Any Questions?  Email me [Here!](dpro308@gmail.com)






