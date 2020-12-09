<div align="center"><img src="https://assets.dmnktoe.de/radio-rasclat/logo/logo.svg" width="140"></div>

# Radio Rasclat

<p>
<img src="https://img.shields.io/github/package-json/v/dmnktoe/radio-rasclat-web.svg?color=%237d29cc">
</p>

Radio Rasclat is a non-commercial internet radio station which is going to stream your music to the web, again! It offers you a platform to play & try out. It serves as a place for the exchange, dialogue and cooperation of music. Founded and curated in 2019, the radio returns to the new venue at KMMN 3. Submit your music via e-mail ([office@radio-rasclat.com](mailto:office@radio-rasclat.com)) to get your own show slot or appearance. Or just listen live on [radio-rasclat.com](https://radio-rasclat.com/).

---

## ✨ Features

- An enterprise-class UI design system for web applications.
- A set of high-quality Angular components out of the box.
- Written in TypeScript.
- Powerful theme customization.
- Internationalization support.

## 🌍 Translate

<a title="Crowdin" target="_blank" href="https://translate.radio-rasclat.com/"><img src="https://badges.crowdin.net/radio-rasclat-web/localized.svg"></a>

Since Radio Rasclat Web has been released in version `4.0.0` , the website can now be translated into any language you like. This makes it even more accessible and user-friendly for our listeners at the same time. The best thing is, everyone can join in and help translating the project into their native language! Head over to [translate.radio-rasclat.com](https://translate.radio-rasclat.com) and follow the instructions.

## 🖥 Development

### Before You Begin

Before you begin we recommend you read about the basic building blocks that assemble our application:

- MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
- Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS Guide](http://expressjs.com/guide/error-handling.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
- Angular - Angular's [Official Website](https://angular.io/) is a great starting point. There are many, many tutorials on YouTube.
- Node.js - Start by going through [Node.js Official Website](https://nodejs.org/en/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

### Branches

<!-- prettier-ignore -->
| Branch    | Tests | Code Coverage | Codefactor | Comments                 |
| --------- | ----- | ------------- | ---------- | ------------------------ |
| `master`  | ![Build](https://github.com/dmnktoe/radio-rasclat-web/workflows/Build/badge.svg) | [![codecov](https://codecov.io/gh/dmnktoe/radio-rasclat-web/branch/master/graph/badge.svg)](https://codecov.io/gh/dmnktoe/radio-rasclat-web) | [![CodeFactor](https://www.codefactor.io/repository/github/dmnktoe/radio-rasclat-web/badge/master)](https://www.codefactor.io/repository/github/dmnktoe/radio-rasclat-web/overview/master) | Latest Production Release |

### Prerequisites

Node.js and npm are essential to Angular development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

### Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
```

### Setup the backend

In order for the application to run completely and properly, you need to download the corresponding backend. The backend is used to load data and content from the database so that it can be displayed in the frontend (this repository). Head over to [Radio Rasclat Server](https://github.com/dmnktoe/radio-rasclat-server) to download and install the backend.

### Main Tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                         | Description                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------- |
| npm start                     | Run development server on `http://localhost:4200/`                              |
| npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder                        |
| npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode        |
| npm run test:ci               | Lint code and run unit tests once for continuous integration                    |
| npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)                 |
| npm run lint                  | Lint code                                                                       |
| npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json` |
| npm run docs                  | Display project documentation                                                   |

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

### Starting the Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

### Code Scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## 🎨 Community

### Find this interesting?

We do too, wanna [participate](https://www.radio-rasclat.com/about)?

### Contributors

<a href="https://github.com/dmnktoe/radio-rasclat-web/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=dmnktoe/radio-rasclat-web" />
</a>

## 📦 Licences

### Third-Party

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdmnktoe%2Fradio-rasclat-web.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdmnktoe%2Fradio-rasclat-web?ref=badge_large)

### License

```
Copyright 2020 Radio Rasclat

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
