'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_PROJECT: JSON.stringify(process.env.FIREBASE_PROJECT),
  FIREBASE_DB: JSON.stringify(process.env.FIREBASE_DB)
});
