

# Environment Variables
``` bash
# Client
REACT_APP_API_HOSTNAME
REACT_APP_API_PORT

# Server
CLIENT_HOSTNAME - Used by API server to set CORS access
CLIENT_PORT
DATABASE_URL
```

# Heroku Setup
``` bash
heroku login

heroku create examplicious --remote heroku-client
heroku create examplicious-api --remote heroku-api

heroku config:set --app examplicious
heroku config:set --app examplicious REACT_APP_API_PORT=443

heroku config:set --app examplicious-api CLIENT_HOSTNAME=https://examplicious.herokuapp.com
heroku config:set --app examplicious-api CLIENT_PORT=443

heroku addons:create --app examplicious-api heroku-postgresql:hobby-dev
```

# Heroku Deployment

After cloning or committing changes, push subfolders to their respective apps' remotes.

``` bash
git subtree push --prefix client heroku-client master
git subtree push --prefix api heroku-api master
```

# Heroku Administration

``` bash
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