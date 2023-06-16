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

const DayInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: black;
  /* flex: 1; */
  /* width: 80px; */
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



function TodoInsert({ todos, onInsert, day, month, onDayChange, onMonthChange}) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const onData = (e) => {
    value.length < 3 ? alert('할 일을 입력하세요') : handleSubmit();
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue('');      
    e.preventDefault();     
  };




  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
        type='text' 
        placeholder='입력하세요.' 
        value={value}
        onChange={handleChange}
      />
      <DayInput 
        type='date'
        id='month'
        name='date'
      />

      <StyledButton 
        type='submit'
        // value={submit}
        onClick={(e) => {onData()}} 
      >
        <Addicon />
      </StyledButton>

    </TodoInsertWrapper>
  );
}

export default TodoInsert;