

module.exports = {

  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // WEATHER_UNLOCKED_APP_ID:process.env.WEATHER_UNLOCKED_APP_ID,
    WEATHER_KEY:process.env.WEATHER_KEY,
    ENV: process.env.ENV,
  },
  poweredByHeader: false,
}

