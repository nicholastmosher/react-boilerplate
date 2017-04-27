# React Boilerplate

This repository is filled with different combinations of React project
templates, each including additional commonly used libraries. The different
templates are hosted on different branches of this repository.

This repository was developed as a side-effect of my creation of this
[React seminar](http://slides.com/nicholastmosher/react-redux-and-router#/),
which references code in this repository. If you're new to React, it may help
you get to know your way around.

## Feature Branches

* react-base: A bare-minimum react project setup using webpack 2.
* with-redux: Integrates redux configurations to the base project.
* with-bootstrap: Integrates bootstrap (source) and required loaders (e.g. sass).

## Sample Branches

* react-base-sample: A small todo app built from the react-base template.
* with-redux-sample: Todo app implemented using the with-redux setup.
* with-bootstrap: An extension of react-base-sample with bootstrap styles.

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
react, redux, and boostrap, run:

```bash
git merge with-redux
git merge with-bootstrap
```
