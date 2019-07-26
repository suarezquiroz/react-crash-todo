import { FETCH_TODOS, NEW_TODO, MARK_COMPLETE, DELETE_TODO } from "./types";
import Axios from "axios";

export const fetchTodos = () => dispatch => {
  Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(
      res => {
        dispatch({
          type: FETCH_TODOS,
          payload: res.data
        });
      }
    );
};

export const addTodo = title => dispatch => {
  const newTodo = {
    title,
    completed: false
  }
  Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    .then(res => {
      dispatch({
        type: NEW_TODO,
        payload: res.data
      });
    })

};

export const markComplete = id => dispatch => {
  console.log('completed: ', id)
  Axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed:true })
    .then(res => {
      dispatch({
        type: MARK_COMPLETE,
        payload: {id}
      });
    })
}

export const delTodo = id => dispatch => {
  console.log('completed: ', id)
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        payload: {id}
      });
    })
}
