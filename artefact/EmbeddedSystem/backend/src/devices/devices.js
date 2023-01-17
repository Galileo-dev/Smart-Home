// Configuration for devices
// This modular design allows for more devices to be easily added
// A real device may have multiple pins.
let devices = [
  {
    id: 'bedroom_light',
    display_name: 'Bedroom',
    type: 'LIGHT',
    pin: 15,
    state: 'unkown'
  },
  {
    id: 'desk_light',
    display_name: 'Desk Light',
    type: 'LIGHT',
    pin: 9,
    state: 'unkown'
  },
  {
    id: 'mirror_light',
    display_name: 'Mirror',
    type: 'LIGHT',
    pin: 8,
    state: 'unkown'
  }
]

module.exports = devices
