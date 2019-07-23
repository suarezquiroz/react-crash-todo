import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from './components/pages/About';

import './App.css';
import Axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const markComplete = (id) => {
    setTodos(todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  };
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        setTodos(res.data)
      })
  }, []);
  const delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        setTodos(todos.filter( todo => todo.id !== id))
      })
  };

  const addTodo = (title) => {
    const newTodo = {
      title,
      completed: false
    }
    Axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
      .then(res => {
        setTodos([...todos,res.data])
      })
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} 
              markComplete={markComplete}
              delTodo={delTodo} />
            </React.Fragment>
          )} />
          
          <Route path="/about" component={About} />

        </div>
      </div>
    </Router>
  );
}

export default App;
