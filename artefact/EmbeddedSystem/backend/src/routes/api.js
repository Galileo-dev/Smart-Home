const express = require("express");

const router = express.Router();

let devices = require("../devices/devices.js");
let state = require("../devices/state.js");

router.post("/set_state", (req, res) => {
  console.log("device updated with body: ", req.body);
  let new_state = req.body.state;
  let device_id = req.body.id;
  let dim_value = req.body.dim_value;
  // update device with values from body of POST
  state.set_device_state(device_id, new_state, dim_value);

  // Return the new state of that device to update the frontend and as a sanity check
  return res.json(state.get_device_state(device_id));
});

router.get("/get_state", (req, res) => {
  //gets the ?id="" string in the get request
  let device_id = req.query.id;
  // get state of device with id
  let current_state = state.get_device_state(device_id);
  console.log(current_state);
  // returns the state of the device
  return res.json(current_state);
});

// Returns of the configured devices listed in devices.js but populated with states
router.get("/devices", (req, res) => {
  return res.json(state.get_devices());
});

module.exports = router;
