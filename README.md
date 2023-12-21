# xD.gov

## About

The xD site is a static site built with [Jekyll](https://jekyllrb.com/).

## Install dependencies

### Ruby

Install Ruby v3 or greater: [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/)

Once Ruby is installed, you can install dependencies contained in the Gemfile via:

```bash
bundle install
```

Bundler is a package manager that comes preinstalled with modern versions of Ruby. You can read more about Bundler here: [https://bundler.io/](https://bundler.io/).

### JavaScript / Node.js

Install Node v18 or greater. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

Install gulp and browserify to help with build tasks for USWDS (gulp) and enabling Node.js modules in the browser (browserify). We use npm to manage our JavaScript dependencies, which comes with Node.js:

```bash
npm install --global gulp-cli
npm install --global browserify
```

After that install the local dependencies with:

```bash
npm install
```

## Running Code Locally

After cloning the repo, from the project root run:

```bash
jekyll serve
```

If you have errors with the above command, you may need to run Jekyll in a bundler context like so:

```bash
bundle exec jekyll serve
```

### Environment Variables

If you need to run the Airtable script locally, create a .env file at the project root with the following format:

```bash
AIRTABLE_API_KEY="..."
AIRTABLE_BASE_ID="..."
```

(contact @curt-mitch-census to get the exact values for these API tokens)

## Updating Ruby

If you need to update the version of Ruby, be sure to specify the version both in the `Gemfile` and `.ruby-version` file. The later is used by Cloud.gov: [https://cloud.gov/pages/documentation/rvm-on-pages/](https://cloud.gov/pages/documentation/rvm-on-pages/).


## Code Syntax Highlighting

Syntax highlighting is handled by Kramdown and Rouge.
[Jekyll Documentation](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting)
To update the syntax styling, add create a new style from these [examples](https://jwarby.github.io/jekyll-pygments-themes/languages/ruby.html), add it to the folder `assets/css/_syntax_highlighting`, and import it in `assets/css/main.scss`.
