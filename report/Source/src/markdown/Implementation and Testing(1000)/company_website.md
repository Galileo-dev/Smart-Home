# Implementation of Company Website

The first stage I took was brainstorming how I wanted the website to look.

- design must be consistent with the products frontend
- must be usable on many devices e.g desktop and mobile phone
- must look pleasing but not overwhelming
- must feature a contact form using firebase
- must use ES6 syntax

# Implementation

## Firebase Contact form

**This is required by the brief as a data capture form**

I used Firebase to store contact form information
this information is stored in a firestore it is structured as such name, email, message, time. the document is stored in a collection on the database with random ids generated when added

## FAQ (Frequently Asked Questions)

Answer any concerns or questions potential or existing customers may have with the product.

## Product Page

This page lists all features and the operation of the product. it can be expanded in the future to be used as a purchase system that will allow customers to buy products without needing to use the contact form

## Home Page

This is the first webpage you see and informs the customer of what gateway is and how it operates.

# Issues

while using SvelteKit was nice in certain Situations it became a pain. for example, using firebase for the contact form had problems as SvelteKit is server-side rendered which means the server serving the website before distributing it. to do this it uses a nodejs environment with no windows because of this, firebase doesn't know what to do so it errors. some ways of fixing this is to not allow firebase to be imported when a window doesn't exist. after research and trial error and testing, I found that the Firestore **must be only be initialized after the component has been displayed or mounted** for this svelte provides an `onMount` function.
