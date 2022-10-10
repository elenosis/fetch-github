import "./App.css";
import { useRef, useState } from "react";

function App() {
  // was wir vor React gemacht haben:
  // const form=document.queryselector('form')
  // form.addEventListener('submit', (event)=>{
  // event.preventDefault()
  // const vornameInput=document.querySelector('#vorname')
  // const vorname=vornameInput.value
  // })

  const inputVornameRef = useRef(null);
  const inputNachnameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const [paragraph, setParagraph] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraph(
      `Ich heiße ${inputVornameRef.current.value} ${inputNachnameRef.current.value}, meine email adresse lautet ${inputEmailRef.current.value}`
    );
    inputVornameRef.current.value = "";
    inputEmailRef.current.value = "";
    inputEmailRef.current.value = "";
  };
  return (
    <div className="App">
      <h1>Unontrolled form demo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="vorname">Vorname</label>
          <input type="text" id="vorname" ref={inputVornameRef} />
        </div>
        <div>
          <label htmlFor="nachname">Nachname</label>
          <input type="text" id="nachname" ref={inputNachnameRef} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" ref={inputEmailRef} />
        </div>
        <button>Absenden</button>
      </form>
      <p>{paragraph}</p>
    </div>
  );
}

export default App;
