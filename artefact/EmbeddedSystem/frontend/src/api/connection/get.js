import { ENDPOINT } from "../CONSTANTS.js"
import { writable } from 'svelte/store';


//https://svelte.dev/repl/b2d671b8119845ca903667f1b3a96e31?version=3.37.0

export function fetch_display(COMMAND_URL) {
    const loading = writable(false)
    const error = writable(false)
    const data = writable({})

    async function get() {
        loading.set(true)
        error.set(false)
        try {
            const response = await fetch(ENDPOINT + COMMAND_URL)
            data.set(await response.json())
        } catch (e) {
            error.set(e)
        }
        loading.set(false)
    }

    get()

    return [data, loading, error, get]
}

export async function fetch_command_data(COMMAND_URL, device_id) {
    try {
        const response = await fetch(ENDPOINT + COMMAND_URL + "?id=" + device_id,
            {
                method: "GET",
            })
        return await response.json();
    } catch (e) {
        return e;
    }
}


