# Smart-Home
A project done for the leaving cert computer science project

# 🚀 Project Contents
- 💻 Company website source: `artefact/CompanyWebsite/` - interface for company website
- 🔌 Embedded Frontend website: `artefact/EmbeddedSystem/frontend` - interface for the embedded system. connects to Embedded Backend
- 🤖 Embedded Backend: `artefact/EmbeddedSystem/backend/` - runs on the raspberry pi and is accessed by the Embedded Frontend website
- 📄 Report website: `report/source/` - The report. written in markdown. `.md`

# 🚀 How to run
## 📋 Requirements
- NodeJs

## 📈 Steps
1. 🔍 Locate your console and navigate to the root of the project
2. 🔧 Run `npm install` to install all required dependencies
3. 🚀 Start the webserver with `npm run dev`
4. 🌍 The console will display the URL of the website, open this in a browser
5. 🤔 If you have any issues, please refer to this [guide](https://svelte.dev/blog/svelte-for-new-developers)

# 🗂 File Structure
- 📂 All code is located in the `/src` folders for each website
- 💻 `.svelte` files are the code, similar to HTML files but with special syntax
- 🔗 `routes` contains all the url routes
- 🧱 `lib` folder is where components are stored

# 🔨 Code structure
- Each `.svelte` file is comprised of three sections:
  1. Script section denoted by `<script>`
  2. HTML
  3. Style section denoted by `<style>`
