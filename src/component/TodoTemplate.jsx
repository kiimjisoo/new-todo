import React, { Children } from 'react';
import styled from 'styled-components';

const TodoTemplateWrapper = styled.div`
  width: 600px;
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

  .content {
    background: white;
  }
`;

function TodoTemplate(props) {
  const { children } = props;
  return (
    <TodoTemplateWrapper>
      <div className='app_title'>일정관리</div>
      <div className='content'>{children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;