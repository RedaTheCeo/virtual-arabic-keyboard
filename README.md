# Install:

you can install our keyboard using `npm`. Just run:

```
$ npm install virtual-arabic-keyboard
```

or by using `yarn`:

```
$ yarn add virtual-arabic-keyboard
```

# Quick Start:

import in `App.js`:

## CSS:

```js
import 'virtual-arabic-keyboard/index.css'
```

## JS:

```js
import 'virtual-arabic-keyboard/index'
```

## App.js:

```js
import logo from './logo.svg';
import './App.css';
import 'virtual-arabic-keyboard/index.css' //css
import 'virtual-arabic-keyboard/index' //js

function App() {
  return (
    <div className="App">
        Hello User !
        <input type="text" id="YourId" value="" dir="rtl" className="keyboardInput" />
    </div>
  );
}

export default App;
```

## Exemple:

![alt text](https://github.com/RedaTheCeo/virtual-arabic-keyboard/blob/main/demo/Exemple.png?raw=true)
