// Importation de React (bien que cela ne soit pas nécessaire dans les versions récentes de React, c'est toujours une bonne pratique)
import React from 'react';

// Importation du composant TodoList
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Todo List App</h1>
      {/* Utilisation du composant TodoList */}
      <TodoList />
    </div>
  );
}

export default App;
