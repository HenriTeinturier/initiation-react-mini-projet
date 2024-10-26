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

function Card({children}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      {children}
    </div>
  )
}

function App() {

  return (
    <div>
      <Card>
        <Welcome name="Henri" />
      </Card>
      <Card>
        <Welcome name="Julie" /> 
      </Card> 
  </div>
  )
}

export default App
