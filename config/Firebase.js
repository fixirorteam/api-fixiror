const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const serviceAccount = require("../serviceAccountKey.json");

const AdminConfig = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
  });


module.exports = AdminConfig