import { writable } from 'svelte/store';
import { fetch_display } from './api/connection/get';


import { GET_DEVICES, GET_DEVICES_ON_OFF } from './api/CONSTANTS';
export function get_devices() {
    return fetch_display(GET_DEVICES);
}

export const lights = writable(0);

