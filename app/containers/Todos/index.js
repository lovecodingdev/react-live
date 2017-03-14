/*
 * TodosPage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';

import H1 from 'components/H1';

import Footer from '../../components/Todo/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'


export default class TodoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Todo Page"
          meta={[
            { name: 'description', content: 'Todo page of React.js Sample application' },
          ]}
        />

        <H1>
          Hello, Todo Page!
        </H1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
