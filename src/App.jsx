import './App.css'

function App() {
	const name = "Henri"
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Bonjour" : "Bonsoir";

  return (
    <div>
      <h1>{greeting}, {name}</h1>
      <p>Il est actuellement {currentHour} heures.</p>
    </div>
  )
}

export default App
