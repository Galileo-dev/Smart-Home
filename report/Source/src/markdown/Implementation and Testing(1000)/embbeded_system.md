# Backend

I have opted for a raspberry pi as the embedded system due to its ability to run Linux and hence NodeJs allowing me to setup an expressJS server.

Through this server I setup a rest API using ExpressJs that can be accessed by the website as long as both are on the same network. this nature keeps the system from being accessed from outside the home which could allow an attack vector of sorts. while it would still be possible to port forward the website and the embedded system for security reasons I would not recommend.

# Database

while a database would be useful it adds unnecessary complexity so what better way to store state then to use the GPIO pins on the raspberry pi and check their state when needed.

## Why not to use database

- It may become desynchronized with the actual activated pins causing confusion
- Needs extra resources
- Would need to be constantly updated along side every pin activation and deactivation
- If firebase was used the system would not operate without an internet connection which is one of the main selling points for my device

## Keeping the backend and frontend in sync

From normal use of the app on multiple device there will be a point when the backend changes but the frontend doesn't this is an inherit disadvantage of rest apis as they are stateless meaning the frontend does not know when the backend has updated. three ways to fix this would be.

1. ### Use a websocket

   this is a method of communication which is continuous back and forth this would allow the backed to communicate any changes to gpio pin from other people ie someone used the app to turn off the light but this would not solve the problem of the light being turned off by other means. also web-sockets are more complicated and provide their own challenges

2. ### Use an Interval

   every minute or so the frontend will request updated data from the backend. this allows for two things the backend to check the status of all gpio pins ie light turned off through external methods e.g light switch and for the backend to synchronize the frontend

3. ### Use a Response to any changes from the app
   every time a request is made to change state we respond with the new state of the device. while we could just assume the new state this would not be true and may cause confusion if something is to happen or bug is to occur.

## How a light is toggled (in steps):

the project is structured in a way that devices can be added in `constants.js` to easily add more lights

1. get device pins defined in `constants.js`
2. get current state of those pins
3. invert that state e.g. `"on"` becomes `"off"`
4. set the pins to that new state
5. get the state of pins
6. respond to request with new pin state to update frontend

## Video

This video will show a demonstration of both systems
The red and green LEDs are temporary and can be swapped out for the big and more powerful one.
