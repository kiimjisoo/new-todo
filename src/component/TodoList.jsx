import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 400px;
  max-height: 600px;
  overflow-y: auto;
`;


function TodoList(props) {
  const { todos, onRemove, onToggle, onTogglePin, onTestPin } = props;

  
  return (
    <TodoListWrapper>
      <div className='DoText'>할 일</div>
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}

      {todos.map((todos) =>  {
        return <TodoListItem  
          key={todos.id} todo={todos} 
            onRemove={onRemove} onToggle={onToggle} 
            onTogglePin={onTogglePin} onTestPin={onTestPin} 
            />
      })}
    </TodoListWrapper> 
  );
}

export default TodoList;