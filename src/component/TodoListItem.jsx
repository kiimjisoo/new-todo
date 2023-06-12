import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle, AiFillDelete } from "react-icons/ai";

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
  flex: 1;
  margin-left: 20px;
  cursor: pointer;

  ${props => props.checked && 
    css`
    color: #b1aeae;
    text-decoration: line-through;
  `
  }
`;



function TodoListItem({ todo, onRemove, onToggle }) {
  // const { todo: { id, text, checked }, onRemove } = props;
  const { id, text, checked } = todo;

  return (
    <TodoListItemWrapper>
      <Checkbox checked={checked}
        onClick={() => { onToggle(id); }}
      >
        {checked ? <AiFillCheckCircle/> : <AiOutlineCheckCircle />}
      </Checkbox>
      <Text checked={checked}>{text}</Text>

      <div className='Remove' onClick={() => { onRemove(id); }}  >
        <AiFillDelete />
      </div>

    </TodoListItemWrapper>
  );
}

export default TodoListItem;