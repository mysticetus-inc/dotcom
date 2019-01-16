# Mysticetus DotCom

**A Hugo site for Mysticetus DotCom**

This is a super quick, Static Site built using [Hugo](https://gohugo.io/) and [Webpack](https://webpack.js.org/).

Mysticetus DotCom uses [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for CSS and JavaScript compiling/transpiling.

## Usage

### :exclamation: Prerequisites

Ensure you have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Mysticetus DotCom.

Next step, clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary to run Mysticetus DotCom and its tasks.

### :construction_worker: Development

While developing your website, use:

```bash
npm start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000/ _- or a new browser windows popped-up already -_ to preview your new website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### :package: Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

To get a preview of posts or articles not yet published, run:

```bash
npm run build:preview
```

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections
|  |--data             // YAML/JSON/md/HTML data files with any data for site
|  |--static           // Files in here ends up in the public folder
|  |--resources        // 
|  |--config.json      // Site configuration including theme, menus, and params
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css seperately
|  |--index.js         // index.js is the webpack entry for your css & js assets
|--themes              // Contains all the theme options
|  |--mysti            // The Mysticetus theme (in dev)
|  |--now-ui           // The Now-UI theme which we are porting theme logic to 'mysti' from
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `themes/[theme]/static` folder. Images, font-files, etc, all go there.

Files in the static folder end up in the web root. So a file called `/themes/[theme]/static/favicon.ico` will end up being available as `/favicon.ico` and so on...

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

## Deploying to Netlify

Coming soon
