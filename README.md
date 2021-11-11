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

## To-Do

* Re-center the map with the help of [Geolib](https://www.npmjs.com/package/geolib) whenever new API results are retrieved
* Support API pagination
* Validate query parameters at the client level
  * Reimplement form inputs (e.g., separate numeric inputs for latitude and longitude)
* Performance
  * Async load Mapbox
  * Generate map markers in a [symbol layer](https://docs.mapbox.com/help/getting-started/add-markers/#approach-1-adding-markers-inside-a-map) to support hundreds of markers
* CRUD
  * New features allowing you to check-in your location to the database
