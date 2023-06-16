import React, { Children } from 'react';
import styled from 'styled-components';

const TodoTemplateWrapper = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-top: 80px;
  border-radius: 4px;
  overflow: hidden;

  .app_title {
    background: #8d8d8d;
    color: black;
    height: 40px;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .count {
    color: black;
    display: flex;
    justify-content: start;
    font-size: 18px;
    /* margin-bottom: 15px; */
    background: #8d8d8d;
    }

  .content {
    background: white;
  }

`;

function TodoTemplate(props) {
  const { children, todos } = props;

  return (
    <TodoTemplateWrapper>
      <div className='app_title'>일정관리</div>
      <div className='count'>
        완료: {todos.filter((todos) => todos.checked === true).length}  
        미완료: {todos.filter((todos) => todos.checked === false).length}  
        전체: {todos.length} 
        </div>
      <div className='content'>{children}</div>
    </TodoTemplateWrapper>

  );
}

export default TodoTemplate;