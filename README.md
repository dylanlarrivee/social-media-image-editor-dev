# Social Media Image Editor

This is a web app that allows users to upload images, add overlays or text and then export the final image to be downloaded locally.

## Getting Set Up

Follow these steps to get this up and running on your local computer

1. Clone this repo to your new project folder.
2. Rename the folder to the name of your app and cd into that.
3. Run `npm install` to install dependencies for the node server.
4. Cd to client folder and run `npm install`.
5. Create a .env file in your main folder that has the following variables:
    1. NODE_ENV=dev
    2. PORT=8080
    3. SECRET={your secret key}
    4. API_KEY={your api key}
6. Cd back to your main folder and run `npm run dev` to start up your Node/Express server and React server all at once.
