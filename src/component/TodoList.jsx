import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 400px;
  max-height: 600px;
  overflow-y: auto;
`;

function TodoList(props) {
  const { todos, onRemove } = props;

  return (
    <TodoListWrapper>
      {todos.map((todos) => {
        return (
          <TodoListItem key={todos.id} todo={todos} onRemove={onRemove}/>
        );
      })}
    </TodoListWrapper>
  );
}

export default TodoList;