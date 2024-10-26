# Initiation à React : Mini Projet

Ce dépôt contient le code source d'une initiation à React, développé dans le cadre d'une démonstration de formation. Chaque étape est associée à un commit pour faciliter le suivi de l'évolution du projet. Ce projet est initialisé avec Vite.

**Note :** Le **Chapitre 1** (Introduction à React.js) n'est pas inclus dans ce dépôt, de même que certains points du Chapitre 2 (Prérequis, Installation, et Structure de l’application).

## Plan de formation

### Chapitre 1 : Introduction à React.js (non inclus dans ce dépôt)
1. Historique de React
2. Philosophie de React
3. Comparatif avec d’autres frameworks (Vue, Angular)
4. Workflow de développement

### Chapitre 2 : Premiers pas avec React
Dans ce chapitre, nous abordons les bases de React et réalisons des exemples de code pour illustrer chaque concept clé.

## Étapes du projet

Chaque point du chapitre 2 présent dans ce dépôt est couvert par un commit spécifique pour faciliter le suivi. Voici la liste des étapes et des commits associés :

### 1. Initialisation du projet (inclus)
- **Commit :** `commit initial - installation vite + template React`

### 5. Composants et JSX (inclus)
- **Commit :** `Composants et jsx`

### 6. Les Props (inclus)
- **Commit :** `Les props`

### 7. Gestion des événements (inclus)
- **Commit :** `handleEvents`

### 8. La prop Children (inclus)
- **Commit :** `Children`

### 9. Hooks et état (state) (inclus)
- **Commit :** `Hooks && useState`

## Code final

Voici le code final de ce mini projet, combinant l'ensemble des fonctionnalités abordées :

```javascript
import './App.css'
import { useState } from 'react';

function Welcome({ name }) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Bonjour" : "Bonsoir";

  return (
    <div>
      <p>{greeting}, {name} !</p>
    </div>
  );
}

function LikeButton() { 
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleClick}>
       {likes} ❤️
    </button>
  );
}

function App() {
  return (
    <div>
      <Card>
        <Welcome name="Henri" />
        <LikeButton />           
      </Card>
      <Card>
        <Welcome name="David" />
        <LikeButton />    
      </Card>
    </div>
  )
}

export default App;
