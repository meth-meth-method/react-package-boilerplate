# SNEX Connect React Widget

A little widget for connecting gamepads with SNEX for React. When this widget exist in your application any user can control your application on their smart phone by clicking the widget and going to the URL shown.

The widget will keep track of link lifetime according to what the SNEX API reports. After the link expires the widget will go back to showing the SNEX logo and a new session can be requested by clicking again.

![Widget Demo](http://i.imgur.com/WSnTxFt.gif "Widget demo")

For more information on the controller API refer to the [SNEX Documentation](https://github.com/snex-io/snex-web/tree/master/docs).


## Usage

* Install.
```bash
yarn add @snex/react-connect
```

* Require component.
```js
import SNEXConnect from '@snex/react-connect';
```

* Define CSS for widget to give it a size at least.
```css
.snex-connect {
    height: 80px;
    width: 200px;
}
```
The widget will inherit CSS properties like `color`, `font-size`, `font-family` etc.

* Setup and render.
```jsx
// A dummy input receiver.
const myGame = new Game();

function handleControllerConnected(controller) {
  controller.on('data', data => {
    if (data.state && data.key === 'A') {
      myGame.hero.jump();
    }
  });
}

<SNEXConnect
  type='nes'
  onConnection={controller => handleControllerConnected(controller)}
/>
```

## Props
### `onConnection` *Function* (required)
Function to call everytime a controller is connected. The function will have the connecting controller as argument. To listen for input from controller attach a listener to the `data` event.
```jsx
<SNEXConnect onConnection={controller => {
    controller.on('data', data => {
        console.log('Controller sent', data);
    });
}}/>
```

### `type` *String* (optional)
Controller type to create URL for like `nes`, `snes`, or `genesis`. Default to `nes`. For a full list of controllers refer to the [SNEX Documentation](https://github.com/snex-io/snex-web/tree/master/docs).
