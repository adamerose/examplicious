# About

This is a React+Python web app example. See a live demo [here](https://examplicious.herokuapp.com/) and the backend API  [here](https://examplicious-api.herokuapp.com).

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

- [React](https://reactjs.org/) - JavaScript frontend UI
  - [create-react-app](https://create-react-app.dev/) - Generates boilerplate React app and webpack config
  - [craco](https://github.com/gsoft-inc/craco) - Override create-react-app config with settings defined in craco.config.js
  -
- [FastAPI](https://fastapi.tiangolo.com/) - Python backend API

## Environment Variables
```console
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
Set up a Heroku account and the Heroku CLI and log in.

```console
heroku login
```

Create two Heroku apps for the `client` and `api`, and set up remotes for each one which will automatically deploy pushed code. Make the apps aware of the other's location by setting the environment variables listed in the section above. Add the `heroku-postgresql` addon, which will automatically set the `DATABASE_URL` environment variable for the app it's applied to.

```console
heroku create examplicious --remote heroku-client
heroku create examplicious-api --remote heroku-api

heroku config:set --app examplicious REACT_APP_API_HOSTNAME=examplicious-api.herokuapp.com
heroku config:set --app examplicious REACT_APP_API_PORT=443

heroku config:set --app examplicious-api CLIENT_HOSTNAME=examplicious.herokuapp.com
heroku config:set --app examplicious-api CLIENT_PORT=443

heroku addons:create --app examplicious-api heroku-postgresql:hobby-dev
```

## Deploying

After cloning or committing changes, push subfolders to their respective apps' remotes. 

```console
git subtree push --force --prefix client heroku-client master
git subtree push --force --prefix api heroku-api master
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
