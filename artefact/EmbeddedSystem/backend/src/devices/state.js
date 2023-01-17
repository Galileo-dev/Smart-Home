let devices = require("./devices.js");
let light = require("./light/set.js");
const Gpio = require("pigpio").Gpio;

function get_device_info(device_id) {
  // finds id of specifc device in array
  let device_info = devices.find(x => x.id === device_id);
  console.log("GPIO pin for ", device_id, " is ", device_info.pin);
  return device_info;
}

function set_device_state(device_id, new_state, dim_value) {
  // Set Device GPIO Pins
  console.log("GPIO pins of ", device_id, " are now set to ", new_state);
  state = new_state;
  //gets the value of the pins for the device
  let device_info = get_device_info(device_id);
  // Use pigpio library to set pins for the specific pins
  light.set(new_state, device_info.pin, dim_value);
}

function get_device_state(device_id) {
  // Find the device pins
  let device_info = get_device_info(device_id);
  // Get the pin state from pigpio and return it 
  return get_pin_state(device_info.pin.toString());
}

function get_pin_state(pin) {
  // pigpio requires a class to be used to find pin states
  const led = new Gpio(pin);
  // find state
  let state = led.digitalRead();

  // translate the response from digitalRead() as it responds with 1 or 0 but the rest of the app useds  "on" and "off" for clarity
  if (state == 1) {
    return "on";
  } else {
    return "off";
  }
}

function get_devices() {
  //populate the state item in the objects
  // adds the state of each device to the device_info array which will then be sent to the frontend.
  console.log("devices", devices);
  let data_populated = [];
  console.log(devices);
  // check the state of each device
  devices.forEach(function(item, index) {
    item.state = get_pin_state(item.pin);
    data_populated.push(item);
  });
  return data_populated;
}

module.exports = {
  get_device_state,
  set_device_state,
  get_pin_state,
  get_devices
};
