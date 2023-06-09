import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus as Addicon } from "react-icons/ai";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #b6b6b6;
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

const StyledButton = styled.button`
  border: none;
  background: #484a4d;
  color: white;
  padding: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    onInsert(value);
    setValue('');

    e.preventDefault();
  }
  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
      type='text' 
      placeholder='입력하세요' 
      value={value}
      onChange={handleChange}
      />

      <StyledButton type='submit'>
        <Addicon />
      </StyledButton>

    </TodoInsertWrapper>
  );
}

export default TodoInsert;