# About

This is a React+Python web app example. See a live demo [here](https://examplicious.herokuapp.com/) and the backend API [here](https://examplicious-api.herokuapp.com).

## Running locally

You can run this web app locally as shown below. By default the client runs on `localhost:8000` and the api on `localhost:3000`.

```console
# Run client
cd client
npm install
npm start
# Run api
cd api
pip install -r requirements.txt
python run.py
```

## Technologies

### Client

#### Core

- [create-react-app](https://create-react-app.dev/) - Generates boilerplate React app and webpack config
  - [react](https://reactjs.org/) - JavaScript frontend UI
  - [react-dom](https://reactjs.org/docs/react-dom.html) - Binds react app to DOM
  - [react-scripts](https://www.npmjs.com/package/react-scripts) - Scripts and configuration used by Create React App.
- [craco](https://github.com/gsoft-inc/craco) - Override create-react-app config with settings defined in craco.config.js
- [react-router-dom](https://reacttraining.com/react-router) - React browser URL routing
- [axios](https://github.com/axios/axios) - Handle HTTP requests
- [mobx](https://mobx.js.org/) - State management library
- [mobx-state-tree](https://mobx-state-tree.js.org/) - Opinionated state tree structure library built on MobX
- [mobx-react-router](https://www.npmjs.com/package/mobx-react-router) - Connects MobX state and observables to React Router
- [serve](https://github.com/zeit/serve) - Serve web app static files from build

#### UI

- [antd](https://ant.design/) - Ant Design UI framework
- [react-json-view](https://github.com/mac-s-g/react-json-view) - Display JSON objects as trees

#### Forms

- [formik](https://github.com/jaredpalmer/formik) - Handles form state, submission, validation and
- [yup](https://github.com/jquense/yup) - Form schema validation
- [formik-antd](https://github.com/jannikbuschke/formik-antd) - Simply adds a `name: string` prop requirement on Antd form components which is needed for use with Formik, and also offers some extra enriched components like SubmitButton

### Server

- [FastAPI](https://fastapi.tiangolo.com/) - Python backend API

# Routes

| Client    |                         |
|-----------|-------------------------|
| `/`       | Homepage (article feed) |
| `/create` | Create an article       |
| `/signin` | Sign in to account      |
| `/signin` | Sign in to account      |

# Deployment

This repository contains two folders for the `client/` and `api/`, and since Heroku Git deployment requires pushing git repositories we use `git subtree` to push these subfolders to our two app remotes.

## Environment Variables

### Client (Embeded in app during create-react-app buildtime)

```console
REACT_APP_API_HOSTNAME
REACT_APP_API_PORT
```

### Server

```console
CLIENT_HOSTNAME - Used by API server to set CORS access
CLIENT_PORT
DATABASE_URL
```

## Initial Setup

Set up a Heroku account and the Heroku CLI and log in.

```console
heroku login
```

Create two Heroku apps for the `client` and `api`, and set up remotes for each one which will automatically deploy pushed code. Make the apps aware of the other's location by setting the environment variables listed in the section above. Add the `heroku-postgresql` addon, which will automatically set the `DATABASE_URL` environment variable for the app it's applied to.

```console
heroku create examplicious --remote heroku-client
heroku create examplicious-api --remote heroku-api

heroku config:set --app examplicious REACT_APP_API_HOSTNAME=https://examplicious-api.herokuapp.com
heroku config:set --app examplicious REACT_APP_API_PORT=443

heroku config:set --app examplicious-api CLIENT_HOSTNAME=https://examplicious.herokuapp.com
heroku config:set --app examplicious-api CLIENT_PORT=443

heroku addons:create --app examplicious-api heroku-postgresql:hobby-dev
```

## Deploying

After cloning or committing changes, push subfolders to their respective apps' remotes.

```console
git subtree push --prefix client heroku-client master
git subtree push --prefix api heroku-api master
```

## Other Commands

```console
# Show app logs
heroku logs --app examplicious --tail
heroku logs --app examplicious-api --tail
# Destroy app
heroku apps:destroy examplicious --confirm examplicious
heroku apps:destroy examplicious-api --confirm examplicious-api
# Restart dyno
heroku dyno:restart --app examplicious
heroku dyno:restart --app examplicious-api
```
