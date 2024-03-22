const path = require('path');

// ./config/database.js
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'firestore',
      settings: {
        projectId: 'ijora-strapi',
      },
      options: {
        // Connect to a local running Firestore emulator
        // when running in development mode
        useEmulator: env('NODE_ENV') == 'development',
      }
    }
  },
});