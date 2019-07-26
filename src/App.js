import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from './components/pages/About';

import store from './store'

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
             <Provider store={store}>
                <AddTodo />
                <Todos />
             </Provider>
            </React.Fragment>
          )} />
          
          <Route path="/about" component={About} />

        </div>
      </div>
    </Router>
  );
}

export default App;
