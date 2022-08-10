import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodoList todos={[{title: "Roll a joint", isCompleted: true},
                        {title: "Try a new sport", description: "Description test" , isCompleted: false},
                        {title: "Learn a lot", isCompleted: false}
      ]}/>
    </div>
  );
}

export default App;
