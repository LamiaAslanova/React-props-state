import React, {useState} from "react";
import "./App.css"

function App() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <button className="openBtn" onClick={toggleModal}>Open</button>

      {modal ?
      <div className="modal">
      <div className="modalOverlay">
        <div className="modalContent">
          <p>Some text in the Modal...</p>
          <button onClick={toggleModal}>X</button>
        </div>
      </div>
    </div> : null}
    </div>
  );
}

export default App;
