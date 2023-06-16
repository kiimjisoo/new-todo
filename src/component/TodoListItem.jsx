import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle, AiFillDelete, AiFillPushpin, AiOutlinePushpin, AiTwotoneEdit } from "react-icons/ai";

const TodoListItemWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  .Remove {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-right: 10px;
    &:hover{
      color: red;
    }
  }
  
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 18px;
  }
`;

const Text = styled.div`
  flex: 0.8;
  margin-left: 20px;
  cursor: pointer;

  ${props => props.checked && 
    css`
    color: #b1aeae;
    text-decoration: line-through;
  `
  }
`;
const Pin = styled.div`
  flex: 2.5;
  cursor: pointer;
  font-size: 18px;
  /* ${props => props.pin &&
    css`
      background: red;
    `
  } */
`;
const TodayStyle = styled.div`
  display: flex;
`;
const TodayYear = styled.div``;
const TodayMonthnDate = styled.div``;




function TodoListItem({ todo, onRemove, onToggle, onTogglePin, onTestPin, 
  onComplete, complete, onNoComplete, noComplete, month, day }) {
    console.log(month);
  const { id, text, checked, pin } = todo;
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const todayDate = today.getDate();
  const todayDay = today.getDay();
  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <TodoListItemWrapper>
      <Checkbox checked={checked} 
      onClick={() => { onToggle(id); }}
      
      >
        {checked ? 
          <AiFillCheckCircle onClick={() => (onComplete(complete -1 ), onNoComplete(noComplete + 1) )}/> : 
          <AiOutlineCheckCircle onClick={() => (onComplete(complete + 1), onNoComplete(noComplete - 1) )} />
        }
      </Checkbox>
      
      <Text checked={checked}>{text}</Text>

      <Pin pin={pin} onClick={() => { onTogglePin(id); onTestPin(id); }}>
        {pin ? <AiFillPushpin /> : <AiOutlinePushpin  />}
      </Pin>

      {/* <TodayStyle>
      <TodayYear>{todayYear}년 </TodayYear>
      <TodayMonthnDate>
        {month}월 {day}일 {DAYS[todayDay]}요일
      </TodayMonthnDate>
    </TodayStyle> */}

      <div className='Remove' onClick={() => 
          { onRemove(id); 
          {checked ? 
            onComplete(complete - 1) : 
            onNoComplete(noComplete - 1);
            }}} >
        <AiFillDelete />
      </div>

    </TodoListItemWrapper>
  );

}
;
export default TodoListItem;