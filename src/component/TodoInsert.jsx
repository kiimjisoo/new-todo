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

const StyleSelect = styled.select`
  background: none;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: black;
  /* flex: 1; */
  width: 80px;
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



function TodoInsert({ onInsert, onNoComplete, noComplete, day, month, onDayChange, onMonthChange}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); 

  e.preventDefault();     
  };

  const onData = (e) => {
    if(!value) {
      alert('할 일을 입력하세요.')
      e.preventDefault();
    }
  }


console.log(month);

  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
      type='text' 
      placeholder='입력하세요.' 
      value={value}
      onChange={handleChange}
      />
    <StyleSelect 
      onSubmit={handleSubmit}
      name={month}
      value={month}
      onChange={onMonthChange}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </StyleSelect>

    <StyleSelect 
      onSubmit={handleSubmit}
      name="day"
      value={day}
      onChange={onDayChange}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option> 
      </StyleSelect>

      <StyledButton 
        type='submit'
        onClick={() => (onData, onNoComplete(noComplete + 1) )} 
      >
        <Addicon />
      </StyledButton>

    </TodoInsertWrapper>
  );
}

export default TodoInsert;