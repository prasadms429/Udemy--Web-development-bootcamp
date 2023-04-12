// The NPM (NODE PAKAGE MANAGER) is external package, which contains codes and libraries written by external parties (From all over world has contributed to npm).
// Native node modules are internal module.

// In hyper
// To initialize npm, to use and creates .json file inside atom.
npm init
// Then fill neccessary details else press enter. Such as this

package name: (intro-to-node)
version: (1.0.0)
description: This is a intro to node project.
entry point: (index.js)     // Entry point will point to main javascript file.
test command:
git repository:
keywords:
author: Prasad M S
license: (ISC)

// To get details of npm packages and use it, go to (This contains external packages)
https://www.npmjs.com/

// Their search required pakages. Such as "superhero names".
// Then follow step given their

// In atom
const superheroes = require('superheroes');   // To include superheroes module in superheroes constant use this line of code.
var mySuperHero = superheroes.random();       // It will give random superhero name
console.log(mySuperHero);

// In hyper
node index.js
