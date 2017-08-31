# ELM STARTER

Starter kit for reusing elm functions. Exports from a module like this should expose functions, not state management. It has a package.json so you can include it in a project via npm or yarn (I prefer yarn b/c it supports semver on git urls). THIS IS A WORK IN PROGRESS.

This is a good way to get started with Elm within a project using webpack and other common infrastructure.

# GET STARTED

This repo should be cloned, then renamed/re-initialized for use in a component.

```bash
git clone git@github.com:tommymessbauer/elm-starter.git your_folder
cd your_folder
rm -rf .git
git init
git remote add origin git@your-git-host:/path-to/repo.git
```

# RUNNING THE PROJECT

```bash
yarn run reinstall
yarn run start
```

After starting, a local dev server with HMR will be running at localhost:3000. Write your functions, then commit and push to your repo.

# ANATOMY OF THIS COMPONENT

* `./src/elm/` - Put your elm functions here. 
* `./src/styles` - Put your sass here.

# EXPOSING MODULES

When you are ready to publish, be sure to put the modules you wish to expose in `elm-package.json` in the `exposed-modules` prop so they can be imported to projects. TODO: make sure this is correct and works.