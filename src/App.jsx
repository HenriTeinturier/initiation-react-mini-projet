import './App.css'

// commencer par transférer les données dans le composant welcome
// ajouter "la prop props" + props.name (console.log(props et props.name)
// destructurer

function Welcome({ name }) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Bonjour" : "Bonsoir";

  return (
    <div>
      <h1>{greeting}, {name}</h1>
      <p>Il est actuellement {currentHour} heures.</p>

    </div>
  )
}

function App() {
  const handleClick = () => {
    console.log("Bouton cliqué !")
  }

  return (
    <div>
    <Welcome name={"Henri"} />
    <Welcome name={"Julie"} />
    <button onClick={handleClick}>Cliquez-moi</button>   
  </div>
  )
}

export default App
