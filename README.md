# React Boilerplate

This repository is filled with different combinations of React project
templates, each including additional commonly used libraries. The different
templates are hosted on different branches of this repository.

This repository was developed as a side-effect of my creation of this
[React seminar](http://slides.com/nicholastmosher/react-redux-and-router#/),
which references code in this repository. If you're new to React, it may help
you get to know your way around.

## Feature Branches

* [react-base](https://github.com/nicholastmosher/react-boilerplate/tree/react-base):
  A bare-minimum react project setup using webpack 2.
* [with-redux](https://github.com/nicholastmosher/react-boilerplate/tree/with-redux):
  Integrates redux configurations to the base project.
* [with-router](https://github.com/nicholastmosher/react-boilerplate/tree/with-router):
  Adds react-router (v4) using hash browser by default.
* [with-router-redux](https://github.com/nicholastmosher/react-boilerplate/tree/with-router-redux):
  Adds both redux and react-router integration. If using
  both, use this branch only, don't also merge with-redux or with-router.
* [with-sass](https://github.com/nicholastmosher/react-boilerplate/tree/with-sass):
  Adds webpack loaders necessary for using sass.
* [with-bootstrap](https://github.com/nicholastmosher/react-boilerplate/tree/with-bootstrap):
  Integrates bootstrap js and sass.

## Sample Branches

* react-base-sample: A small todo app built from the react-base template.
* with-redux-sample: Todo app implemented using the with-redux setup.
* More coming soon.

# Getting started

To setup a project using one of these configurations, first clone this repo
and checkout a new branch from react-base:

```bash
git clone https://github.com/nicholastmosher/react-boilerplate.git
cd react-boilerplate
git checkout -b myproject react-base
```

Next, you'll need to choose which starter configurations you want to use and
merge in the corresponding branches. For example, to get a starter with
react, redux, and bootstrap, run:

```bash
git merge origin/with-redux
git merge origin/with-bootstrap
```

In some cases, the branches may not merge seamlessly. In those cases, keep both
sets of code from the merging branches and resolve the conflict.

After choosing the desired features, install all of the dependencies using npm:

```bash
npm install
```

After the dependencies are installed, you can launch the development server using

```bash
npm run dev
```

which will serve the site at `localhost:8080`, automatically refreshing when
changes are made to the source.

You can build the static files needed to publish the site using

```bash
npm run build
```

which will build the webpack bundle and place it in `public/bundle.js`.
