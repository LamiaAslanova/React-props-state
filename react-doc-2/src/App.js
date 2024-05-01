import { useState } from "react";
import "./App.css"

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const DarkMode = () => {
      setDarkMode(true)
    }

    const LightMode = () => {
      setDarkMode(false)
    }

  return (
    <div className="App">
      {darkMode ? (
        <div className="darkMode">
          <button onClick={LightMode}>Light Theme</button>
          <div><p>WELCOME TO <br></br> REACT JS</p></div>
        </div>
      ) : (
        <div className="lightMode">
          <button onClick={DarkMode}>Dark Theme</button>
          <div><p>WELCOME TO <br></br> REACT JS</p></div>
        </div>
      )}
    </div>
  );
}

export default App;
