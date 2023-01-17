import { fetch_command_data } from "../connection/get.js"
import { GET_DEVICES_ON_OFF, SET_DEVICES_ON_OFF } from "../CONSTANTS.js"
import set from "../connection/set.js"

export async function set_device(state, id, dim_value = 0) {
    // send commands to the backend such as turn light on or dim light at 20%
    return await set(SET_DEVICES_ON_OFF, { state: state, id: id, dim_value: dim_value })
}


export async function toggle(id, dim_value) {
    // get the current state of device
    let state = await fetch_command_data(GET_DEVICES_ON_OFF, id)

    // set the light to the opposite of its current state
    let new_state = await toggle_logic(state, id, dim_value);


    // Every Request will have a response of the updated value to update the UI faster
    return new_state;

}


// set the light to the opposite of its current state
// set will have three states for a light. on/off/dim
// on or off just does what says while dim will take an extract 
// value which set the brightness of the led
async function toggle_logic(state, id, dim_value) {
    if (state == "on" || state == "dim") {
        return await set_device("off", id)
    } else if (state == "off") {
        return await set_device("on", id, dim_value)
    } else {
        console.log("no state defined ", state);
    }
}

// Light must be "on" for dim to occur
export async function dim(state, id, dim_value) {
    if (state == "on") {
        set_device("dim", id, dim_value)
        console.log("dimming ")
    } else {

    }
}