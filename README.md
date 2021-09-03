# About

This is a fullstack clone of Google Keep

# Environment Variables

```bash
# Client
REACT_APP_BACKEND_HOSTNAME - Used by react app to direct API calls
REACT_APP_BACKEND_PORT - Used by react app to direct API calls
PORT - Used by create-react-app to determine what port to run dev server on

# Server
FRONTEND_HOSTNAME - Used by backend server to set CORS access
FRONTEND_PORT - Used by backend server to set CORS access
DATABASE_URL - Used by backend server to direct database access
```

# Heroku Setup

```bash
heroku login

heroku create adrotog-keep --remote heroku-frontend
heroku create adrotog-keep-api --remote heroku-backend

heroku config:set --app adrotog-keep REACT_APP_BACKEND_HOSTNAME=https://adrotog-keep-api.herokuapp.com
heroku config:set --app adrotog-keep REACT_APP_BACKEND_PORT=443

heroku config:set --app adrotog-keep-api FRONTEND_HOSTNAME=https://adrotog-keep.herokuapp.com
heroku config:set --app adrotog-keep-api FRONTEND_PORT=443

heroku addons:create --app adrotog-keep-api heroku-postgresql:hobby-dev
```

# Heroku Deployment

After cloning or committing changes, push subfolders to their respective apps' remotes.

```bash
git subtree push --prefix frontend heroku-frontend master
git subtree push --prefix backend heroku-backend master
```

# Heroku Administration

```bash
# Show app logs
heroku logs --app adrotog-keep --tail
heroku logs --app adrotog-keep-api --tail
# Destroy app
heroku apps:destroy adrotog-keep --confirm adrotog-keep
heroku apps:destroy adrotog-keep-api --confirm adrotog-keep-api
# Restart dyno
heroku dyno:restart --app adrotog-keep
heroku dyno:restart --app adrotog-keep-api
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
