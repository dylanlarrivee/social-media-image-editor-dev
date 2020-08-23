# React Node Boilerplate

This is a boilerplate that you can use to get a react client and node server web app up and running quickly for proof of concepts or demos.

## Getting Set Up

Follow these steps to get this up and running on your local computer

1. Clone this repo to your new project folder.
2. Rename the folder to the name of your app and cd into that.
3. Run `npm install` to install dependencies for the node server.
4. Cd to client folder and run `npx create-react-app client`. This will install the create react app code in a folder called client to get us going on the client side.
5. Create a .env file in your main folder that has the following variables:
    1. NODE_ENV=dev
    2. PORT=8080
6. Cd back to your main folder and run `npm run dev` to start up your Node/Express server and React server all at once.
