# xD.gov

## About

The xD site is a static site built with [Jekyll](https://jekyllrb.com/).

## Install dependencies

Install Ruby v3 or greater: [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/)

Once Ruby is installed, you can install dependencies contained in the Gemfile via:

```bash
bundle install
```

Bundler is a package manager that comes preinstalled with modern versions of Ruby. You can read more about Bundler here: [https://bundler.io/](https://bundler.io/).

## Running code locally

After cloning the repo, from the project root run:

```bash
jekyll serve
```

If you have errors with the above command, you may need to run Jekyll in a bundler context like so:

```bash
bundle exec jekyll serve
```
