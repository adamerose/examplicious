# About

This is a React+Python web app example. See live demo [here](https://examplicious.herokuapp.com/). The client queries this API.

## Run locally

```bash
# Run client
cd client
npm install
npm start
# Run api
cd api
pip install -r requirements.txt
python run.py
```

# Technologies

- [React](https://reactjs.org/) - JavaScript frontend UI
  - [create-react-app](https://create-react-app.dev/) - Generates boilerplate React app and webpack config
  - [craco](https://github.com/gsoft-inc/craco) - Override create-react-app config with settings defined in craco.config.js
  -
- [FastAPI](https://fastapi.tiangolo.com/) - Python backend API

# Environment
```
# Client (Embeded in app during create-react-app buildtime)
REACT_APP_API_HOSTNAME
REACT_APP_API_PORT
# Server
CLIENT_HOSTNAME - Used by API server to set CORS access 
CLIENT_PORT
DATABASE_URL
```
# Heroku Deployment

This repository contains two folders for the `client/` and `api/`, and since Heroku Git deployment requires pushing git repositories we use `git subtree` to push these subfolders to our two app remotes.

## Initial Setup

```bash
heroku login
# Create apps for client and api
heroku create examplicious --remote heroku-client
heroku create examplicious-api --remote heroku-api
# Create postgres database. This addon will set DATABASE_URL
heroku addons:create --app examplicious-api heroku-postgresql:hobby-dev
# Set client environment variables
heroku config:set --app examplicious REACT_APP_API_HOSTNAME=examplicious-api.herokuapp.com
heroku config:set --app examplicious REACT_APP_API_PORT=443
# Set api environment variables
heroku config:set --app examplicious-api CLIENT_HOSTNAME=examplicious.herokuapp.com
heroku config:set --app examplicious-api CLIENT_PORT=443

```

# Deploy

```bash
git subtree push --prefix client heroku-client master
git subtree push --prefix api heroku-api master
```

# Other

```bash
# Show app logs
heroku logs --app examplicious --tail
heroku logs --app examplicious-api --tail
# Destroy app
heroku apps:destroy examplicious --confirm examplicious
heroku apps:destroy examplicious-api --confirm examplicious-api

heroku apps:destroy test6230790630 --confirm test6230790630

# Restart deno
heroku dyno:restart --app examplicious
heroku dyno:restart --app examplicious-api
```
