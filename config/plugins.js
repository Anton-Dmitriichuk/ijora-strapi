module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_oO8BzIkjX71LI3TTMuBkFv5SrzGl/pkva8FJDQ8",
        apiToken: "pWxhtRJIsf3fy3lFBMQH6HOj",
        roles: ["strapi-super-admin"],
      },
    },

    "firebase-auth": {
      enabled: true,
      config:{ FIREBASE_JSON_ENCRYPTION_KEY:"BpNZufhGpWW2uaYacf8tl3FtGtu1npm" }
  },

  });