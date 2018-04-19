'use strict'
require('dotenv').config();

module.exports = {
    NODE_ENV: '"production"',
    FIREBASE_PROJECT: JSON.stringify(process.env.FIREBASE_PROJECT),
    FIREBASE_DB: JSON.stringify(process.env.FIREBASE_DB),
    FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
    FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
    FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    FIREBASE_MESSAGE_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID)
}
