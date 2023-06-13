import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle, AiFillDelete, AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";

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




function TodoListItem({ todo, onRemove, onToggle,onChangePin, onTestPin }) {
  // const { todo: { id, text, checked }, onRemove } = props;
  const { id, text, checked, pin } = todo;

  return (
    <TodoListItemWrapper>
      <Checkbox checked={checked} onClick={() => { onToggle(id); }}>
        {checked ? <AiFillCheckCircle/> : <AiOutlineCheckCircle />}
      </Checkbox>
      
      <Text checked={checked}>{text}</Text>

      <Pin pin={pin} onClick={() => { onChangePin(id); onTestPin(id); }}>
        {pin ? <AiFillPushpin /> : <AiOutlinePushpin />}
      </Pin>

      <div className='Remove' onClick={() => { onRemove(id); }} >
        <AiFillDelete />
      </div>

    </TodoListItemWrapper>
  );

}
;
export default TodoListItem;