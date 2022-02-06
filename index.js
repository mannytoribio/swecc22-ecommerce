// Imports express from node_modules to create an Express App
const express = require("express")

// Sets app as variable that allows us to utilize the express function
const app = express()

/* creates a server and listens for changes on the designated port
which is our route
*/
app.listen(3000, () => {
  console.log("Listening On Port 3000")
})
