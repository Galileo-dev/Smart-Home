import { ENDPOINT } from "../CONSTANTS.js"


// default names the function the name of the file "set" in this case
export default async function (COMMAND_URL, body) {
    try {
        const response = await fetch(ENDPOINT + COMMAND_URL, {
            headers: {
                // needed for body to send json!
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        console.log("Client Send New State Of: ", body)
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}
