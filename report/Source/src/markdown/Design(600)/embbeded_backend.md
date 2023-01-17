I have opted for a RaspberryPi as the embedded system due to its ability to run Linux and NodeJs allowing me to use an ExpressJS server.

Through this server, I set up a rest API using ExpressJs that can be accessed by the website as long as both are on the same network. this nature keeps the system from being accessed from outside the home which could allow an attack vector of sorts. while it would still be possible to port forward the website and the embedded system for security reasons I would not recommend it.

port forwarding and a simple login would solve and allow the device to be accessed from outside

# Database

while a database would be useful it adds unnecessary complexity so what better way to store state than to use the GPIO pins on the raspberry pi and check their state when needed.

## Keeping the backend and frontend in sync

From normal use of the app on multiple devices, there will be a point when the backend changes but the frontend doesn't this is an inherent disadvantage of rest APIs as they are stateless meaning the frontend does not know when the backend has updated. three ways to fix this would be.

1. ### Use a websocket

   this is a method of communication that is a continuous back and forth this would allow the backed to communicate any changes to gpio pin from other people ie someone used the app to turn off the light but this would not solve the problem of the light being turned off by other means. also, web sockets are more complicated and provide their own challenges

2. ### Use a Response to any changes from the app
   every time a request is made to change the state we respond with the new state of the device. while we could just assume the new state this would not be true and may cause confusion if something is to happen or a bug is to occur.
