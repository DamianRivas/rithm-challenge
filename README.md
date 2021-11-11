# Rithm API Challenge Client

The client for my submission for the API technical challenge provided by Rithm. Check out the backend [here](https://github.com/DamianRivas/rithm-challenge-api)

## Project Setup

1. Clone the application and `cd` into the project directory

2. Install dependencies:

```console
npm i
```

3. Copy the contents of `.sample.env` into a `.env` file
```console
cat .sample.env > .env
```

4. Populate the `.env` file with your [mapbox](https://www.mapbox.com/) API key and URL to a running [backend](https://github.com/DamianRivas/rithm-challenge-api) server (without a trailing slash)

5. Start a local dev server

```console
npm run dev
```

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
