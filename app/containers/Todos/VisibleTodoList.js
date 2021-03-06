
import { connect } from 'react-redux'
import { toggleTodo } from './actions'
import TodoList from '../../components/Todo/TodoList'
import { createStructuredSelector } from 'reselect'



const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

function mapStateToProps(state) {
  return { 
    todos: getVisibleTodos(state.get('todos').todos, state.get('todos').visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList