// All Constants live here they mainly contain configuration options such as endpoint url , etc


// This is the backend connection point
export const ENDPOINT = "http://192.168.0.108:5000"

//Command urls
// such that ENDPOINT + COMMAND_URL can be used through out the app so as to be easily changed
export const SET_DEVICES_ON_OFF = "/api/set_state"
export const GET_DEVICES_ON_OFF = "/api/get_state"
export const GET_DEVICES = "/api/devices"