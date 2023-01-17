# Brain Storming

I have chosen SvelteKit for the frontend of this project for both the product and company website along with ExpressJs for the backend of the embedded system, which will be a raspberry pi

I was going to pick ReactJs but decided against it for a few reasons.

SvelteKit offers better performance, and it features **(SSR) server-side rendering** this works by initially compiling the webpage on the server, which is then served to the user as a static site without reactivity that would slow down the initial load. The **DOM (Document Object Model)** is then loaded in, and the app is now client-side rendered.
SvelteKit is derived from another framework called svelte which does not feature SSR and is designed for single paged apps

The main feature of SvelteKit is a DOM-like reactivity but the enhancement of server-side rendered app with **SEO (Search engine optimization)**. This is ideal for a production environment as search engine optimization determines whether Google and other search engines will list your website as the first result to users. This is crucial as the user would give up trying to find your sight.

**I Choose** a light control system that allows for multiple lights that can all be connected to a single RaspberryPi. it works by using a MOSFET to toggle a low-power light, this can be swapped with a solenoid to allow for proper house lights. The RaspberryPi will host both a frontend and backend. The backend will control the Lights at the request of the frontend through an ExpressJs server which allows for easy adaptability for different apps, e.g. phone, tablet, desktop, or even some IoT device. Any device that can make requests on your network will be able to communicate with the backend server. I added a dimming feature as the pi is capable of PWM(Pulse Width Modulation). An application where this is important is a wake-up light and mood-setting.

Because my system will be able to control all lights in a house it can be used to turn on the bedroom light at a specific time to help people wake up easier. a [study](http://mb.cision.com/Public/MigratedWpy/81617/9077638/80ece083943f51dd.pdf) showed when waking up to light rather than an alarm **87% of participants found they were waking up feeling more refreshed, alert, and ready for the day**.

I was going to pick a **door open close system** which would use some aluminum foil on both the doorframe and the door to form a basic switch circuit. the RaspberryPi could then detect a break in the circuit when the door is open. the data would then be forwarded to a frontend website but I rejected this idea as it would be useless. after some research, I found that doors need to be open to vent a house and stop mold from developing on walls so it would be kind of useless and the user would have no interaction. also the foil would keep bending after a while making the prototype too fragile to use.

Another Idea was a **fall detection device**. it would use accelerometers to detect high accelerations close to **9.8m/s^2** but this had issues of not being able to incorporate a useful frontend and I didn't want the RaspberryPi to break in testing so I choose not to pursue it. if a fall is detected and no large movements were detected within a certain time frame it would notify selected contacts.
