import { FETCH_TODOS, NEW_TODO, DELETE_TODO, MARK_COMPLETE } from "../actions/types";

const initialState = {
  todos: [],
  todo: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter( todo => todo.id !== action.payload.id)]
      }
    case MARK_COMPLETE:
      return {
        ...state,
        todos: [...state.todos.map( todo => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })]
      }
    default:
      return state;
  }
}