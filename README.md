# Mysticetus DotCom

**A Hugo site for Mysticetus DotCom**

This is a super quick Static Site built using [Hugo](https://gohugo.io/), [Now UI Kit](https://demos.creative-tim.com/now-ui-kit/index.html), and [Webpack](https://webpack.js.org/).

Mysticetus DotCom uses [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for CSS and JavaScript compiling/transpiling.

## Usage

### :exclamation: Prerequisites

Ensure you have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Mysticetus DotCom.

Next step, clone this repository

```bash
git clone git@github.com:mysticetus-inc/dotcom.git
```

Setup npm dependencies:
```bash
npm install
```
Npm install will take some time (few minutes) and will install all packages necessary to run Mysticetus DotCom and its tasks.

### :construction_worker: Development

While developing your website, use:

```bash
npm start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000/ to preview the website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### :package: Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                		// Everything in here will be built with hugo
|  |--content          		// Pages and collections
|  |--data             		// YAML/JSON/md/HTML data files with any data for site
|  |--layouts          		// This is where all templates go
|  |  |--_default      		// This is where the base templates go
|  |  |--partials      		// This is where includes live
|  |  |--[filename].html	// These are template files
|  |--static           		// Files in here ends up in the public folder
|  |--config.toml      		// Site configuration. Can include theme, menus, and global params
|--src                 		// Files that will pass through the asset pipeline
|  |--fonts              	// This is where our fonts live
|  |--styles              	// Webpack will bundle imported sass seperately
|  |  |--theme      			// This is where Now UI Kit lives
|  |--custom.scss          // Overrides for Now UI Kit
|  |--main.scss          	// Customization styling
|  |--index.js         		// index.js is the webpack entry for your sass & js assets
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder end up in the web root. So a file called `/site/static/favicon.ico` will end up being available as `/favicon.ico` and so on...

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

## [Netlify](https://netlify.com)

### Account Access

To access the Mysticetus site on Netlify:

- Go to https://www.netlify.com
- Click the "Login" button on the top right.
- Enter the Mysticetus login credentials (see Dave)
- Find "Mysticetus" in the site list
- Click it

From here you have complete control over the Mysticetus site server. For more information of what you can do here, please continue reading or visit the [Netlify Docs](https://www.netlify.com/docs/).

### Deploying to Netflify

> For a quick intro into publishing a site using Netlify, watch this YouTube Video: [Netlify Tutorial – Deploying from Git](https://youtu.be/mN9oI98As_4)

The Mysticetus website uses [continuous integration](https://www.netlify.com/docs/continuous-deployment/) with Github and Netlify. That means the code that lives in the Mysticetus `master` branch is automatically deployed to Netlify upon every commit. More information about how Netlify and Github interact can be found [here](https://www.netlify.com/docs/github-permissions/).

_"Continuous deployment works by connecting a Git repository to a Netlify site and keeping the two in sync."_

### [Branches & Deploys](https://www.netlify.com/docs/continuous-deployment/#branches-deploys)

**Production branch:** the Git branch that Netlify uses to build and deploy changes to the Mysticetus site’s main URL (e.g. www.mysticetus.com and mysticetus.netlify.com).
**Production deploy:** a deploy from the production branch. Auto publishing is enabled so each new production deploy will update what is published at the Mysticetus site’s main URL.
**Branch deploy:** a deploy generated from a branch that is not your production branch, like `test`. Branch deploys are published to a URL which includes the branch name as a prefix. For example, if a branch is called `test`, it will deploy to `test--mysticetus.netlify.com`. Soon we will use Netlify DNS so the `test` branch example would deploy to `test.mysticetus.com`.


### [Rolling Back Version](https://www.netlify.com/docs/manual-deploys/#rolling-back-versions)

> For a quick intro into rolling back versions on Netlify, watch this YouTube Video: [Netlify Tutorial – Versioning and rollbacks](https://youtu.be/wKPu2B3hVtQ)

Did something go :boom:? No worries, any previous deploy can be selected as the live version of your site in production using the Publish Deploy button on the Deploys page. For full instructions, please visit [**Rolling Back Version**](https://www.netlify.com/docs/manual-deploys/#rolling-back-versions) in the Netlify Docs. Additional reading can be found [here](https://www.netlify.com/docs/versioning-and-rollbacks/).

> Note: This will only happen if something outside of the build process fails. If the build fails, for example let's say an node module doesn't intall properly, Netlify will not publish that deploy.
