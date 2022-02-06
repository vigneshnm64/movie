module.exports = {
    env: {
        apiKey:process.env.API_KEY,
    },

    serverRuntimeConfig: {
        // Will only be available on the server side
        apiKey: process.env.API_KEY,  
   },
      publicRuntimeConfig: {
      // Will be available on both server and client
      apiKey: process.env.API_KEY,
    },
  }