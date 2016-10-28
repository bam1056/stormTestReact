# React Application Using a Node.js Server, Express.js, and the StormPath SDK for React
---

This is a project based on creating a Node server using Express to render React components utilizing StormPaths authorization to handle login. To use, follow the steps below:

1. Clone the repo
2. Run `npm install`
3. Create a stormpath.yml with the following structure in the root directory :

```
client:
  apiKey:
    id: YOUR API ID
    secret: YOUR API SECRET
  href: https://api.stormpath.com/v1/applications/<YOUR UNIQUE APPLICATION STORMPATH HREF HERE>
```
4. Run `npm start` in the command line of the root project folder
5. Customize as much as your heart desires to get the concepts!

##Have fun!!
