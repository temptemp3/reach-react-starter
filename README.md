# REACH REACT TEMPLATE (Using JS and Redux)

A template to use it with Reach frontends that makes it possible to stream-line the process.
Template also demonstrates how it works by implementing Rock Paper Scissors example

## Prequisites

- Node.js
- npm

## Installation

- Clone the repo
- Inside the project folder run `npm install package.json` to install the dependencies
- In the same folder run `./reach devnet` to start the development network
- Start the website by running `npm run start` in another terminal

## How to convert your Reach contract to a React website

- Copy your compiled Reach artifact (index.main.mjs) to src/reach/build/ (If your filename is different change src/reach/DeployAttach.jsx:7 and src/reach/participants/Participants.jsx:12)

- (Optional) If you want to set contract arguments before starting the application, add relevant forms to get the data and pass it to the <DeployButton />
  e.g.

  ```js
  const myCtcArgument = 1;
  return (
    <>
      // ...
      <DeployButton role="Alice" ctcArg1={myCtcArgument} />
    </>
  );
  ```

  For example, wager amount for the Rock Paper Scissors is a contract parameter in this frotend and it is set in the src/views/Home.jsx

  - (Optional) If you passed the contract argument(s) to DeployBuytton, navigate to src/reach/DeployAttach.jsx and set the contract arguments inside deploy()
    function using
    `dispatch(setArgs({ arg1: props.ctcArg1 }))`

- Set the roles of deploying and attaching sides by simply passing `role="Alice"` inside DeployButton and AttachButton (replace "Alice" with your participant name). In the example these buttons are inside src/views/Home.jsx. You can set multiple roles by adding multiple AttachButton's.

> A common way to write Reach website is to divide the app (at least the part where we run the Reach app) to "views". Most of the time each participant function shows a different view to the user.

- In the src/reach/participants/interfaces folder create a new file for each participant, filling their participant interfaces. For convention I recommend you to name them "`participantName + Interface.js`" (aliceInterface.js for example). I added additional information inside the folder.

- In the src/reach/participants/views folder create a new file for each participant, filling their views; the HTML they'll see for each function. An easy way to do it is to switch props.state.view to render a different component.

- In the src/reach/participants/Participants.jsx file add each participant as (replace Alice with your participant)

```js
export const Alice = ParticipantFactory({
  interface: aliceInterface,
  views: AliceViews,
  setBackend: Backend.Alice,
});
```

- In the src/views/ folder create a file for the application (For convention called `contractName.jsx`). Inside, return the participants inside Participants.jsx by checking the `appState.participant`

- In src/App.jsx update the route for /app to your application component. (Of course you'll need to import it first)
  (e.g `<Route path="/app" exact component={RPS} />`)

- That should be it. Run your site with `npm run start`. Add style and customize your site.

(This file is converted from my TypeScript tutorial, if there is a mismatch between actual files, please notify me)
