//set will have three states for a light. on/off/dim
// on or off just does what says while dim will take an extract value which set the brightness of the led
const Gpio = require("pigpio").Gpio;

function set(state, pin, brightness) {
  // first set pin as output
  const led = new Gpio(pin.toString(), { mode: Gpio.OUTPUT });
  switch (state) {
    case "on":
      // 1 means on
      led.digitalWrite(1);
      console.log("Switch on");
      break;
    case "off":
      // 0 mean off
      led.digitalWrite(0);
      console.log("Switch off");
      break;
    case "dim":
      // PWM stands for pulse with modulation
      led.pwmWrite(brightness); // max 255
      console.log("Switch dim");
      break;
    default:
      console.log("The state does not exist for this device");
  }
}

function wakeup(pin) {
  const led = new Gpio(pin.toString(), { mode: Gpio.OUTPUT });
  let dutyCycle = 0;


// Slowly increases the dim of the light until it is fully on 
let wakeup_pwm = setInterval(() => {
  led.pwmWrite(dutyCycle);

  // Every interval cycle raise the dutyCycle
  dutyCycle += 1;

  // 255 is the max dutyCycle. it is now at full power
  if (dutyCycle > 255) {
    // set the light to on so it does'nt use pmw
    led.digitalWrite(1);
    // Remove the interval
    clearInterval(wakeup_pwm)
  }
}, 10);
}

module.exports = { set, wakeup };
