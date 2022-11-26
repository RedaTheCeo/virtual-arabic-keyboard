import logo from './logo.svg';
import './App.css';
import 'virtual-arabic-keyboard/index.css'
import 'virtual-arabic-keyboard/index'

function App() {
  return (
    <div className="App">
      <div >
        Hello User  !
        <input type="text" id="YourId" value="" dir="rtl" className="keyboardInput" />
      </div>
    </div>
  );
}

export default App;
