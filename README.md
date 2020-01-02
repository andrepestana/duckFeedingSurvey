# Duck Feeding Survey app #

Simple application to collect duck feeding data.

AngularJs --> NodeJs --> MongoDB

## Download and install dependencies: ##
```bash
# Clone project and install dependencies
git clone https://github.com/andrepestana/duckFeedingSurvey.git 
cd duckFeedingSurvey
npm i
npm install -g npx
npm install -g nodemon
```
## Build ##
```bash
# Build nodejs app for prod env
npm run build-nodejs

# Build web app for prod
npm run build-web

```
## Run Tests ##
```bash
# Install Karma to run tests
npm i -g karma-cli
npm run tests
```

## Run the application ##
```bash
# Run nodejs app for dev env
npm run dev-nodejs

# Run nodejs app for prod env
npm run start-nodejs

# Run web app for dev
npm run dev-web
```

## Create nodejs docker image ##
```bash
docker build -f Dockerfile_nodejs -t <image-name> .
```
## Run nodejs docker image ##
```bash
docker run --env-file=<ENV_VARS_FILE> -p 1234:1234 -d <image-name>
```

## Create webserver docker image ##
```bash
docker build -f Dockerfile_web -t <image-name> .
```

## Run webserver docker image ##
```bash
docker run -p 80:80 -d <image-name>
```