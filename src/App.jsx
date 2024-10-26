import { useState } from 'react';
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

function LikeButton() {
  const [likes, setLikes] = useState(0)

  const handleClick = () => {
    setLikes(likes +1)
  }

  return (
    <button onClick={handleClick}>
       {likes} &hearts;
    </button>
  )
}

function App() {

  return (
    <div>
      <Card>
        <Welcome name="Henri" />
        <LikeButton />
      </Card>
      <Card>
        <Welcome name="Julie" /> 
        <LikeButton />
      </Card> 
  </div>
  )
}

export default App
