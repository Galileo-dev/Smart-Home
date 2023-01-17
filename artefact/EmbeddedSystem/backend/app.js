const express = require("express");
const cors = require("cors");
const app = express();

// Can be changed if port is already being used
const port = 5000;

//Extend the current routes with routes from other directorys
const routes = require("./src/routes/routes");

const firebaseUptime = require("./src/firebase.js");
firebaseUptime.initialize();
// Experimental Wake-up light
const cron = require("node-cron");
const light = require("./src/devices/light/set.js");
// using a cron job to schedule a light to come on every day at a specific time
// 30 7 * * * means 30th minute of the 7nth hour. the rest of the asterisks represent the day, month and year
cron.schedule("30 7 * * *", function() {
  light.wakeup("bedroom_light");
});

// Needed to prevent Cross-Origin Resource Sharing errors
app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());
app.use("/api", routes.api);

// This port needs to be the same on the backend
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
