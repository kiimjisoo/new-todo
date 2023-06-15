import React from 'react';
import styled from 'styled-components';

const TodoModifyWrapper = styled.div`
  background-color: royalblue;
`;
const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5;
  color: black;
  flex: 1;

  &::placeholder {
    color: black;
  }
`;

function TodoModify(props) {
  return (
    <TodoModifyWrapper>
      <StyledInput 
        type='text'
        placeholder='수정하세요'
        
        
      />
    </TodoModifyWrapper>
  );
}

export default TodoModify;