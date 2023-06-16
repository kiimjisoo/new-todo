import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import { useCallback, useDebugValue, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";



const GloabalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #e9ecef;
  }
`;

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '공부하기',
      checked: false,
      pin: false
    },
    {
      id: 2,
      text: '숙제하기',
      checked: true,
      pin: false
    },
    {
      id: 3,
      text: '운동하기',
      checked: false,
      pin: false
    },
  ]);
  

  const nextId = useRef(4);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      pin: false
    };

    // *배열 추가*
    const copyTodos = [...todos];
    copyTodos.push(todo);
    setTodos(copyTodos);
    nextId.current += 1;    
  }, [todos]);
  

// *제거*
  const handleRemove = useCallback((id) => {
    const copyTodos = [...todos];
    const otherIndex = todos.findIndex((todo) => todo.id === id);
    copyTodos.splice(otherIndex, 1);
    setTodos(copyTodos);
  }, [todos]);

// checkbox 토글
  const handleToggle = useCallback((id) => {
    const copyTodos = [...todos];
    const target =  todos.find((todo) => todo.id === id);
    target.checked = !target.checked;
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    copyTodos[targetIndex] = target;
    setTodos(copyTodos);    
  }, [todos]);

// pin 토글
  const handlePinToggle = useCallback((id) => {
    const copyTodos = [...todos];
    const target =  todos.find((todo) => todo.id === id);
    target.pin = !target.pin;
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    copyTodos[targetIndex] = target;
    setTodos(copyTodos);    
  }, [todos]);
  

  // pin 상단 고정
  const handleTestPin = useCallback((id) => {
    const copyTodos = [...todos];
    const target = todos.find((todo) => todo.id === id);
    const foundIndex = copyTodos.findIndex((id) => id === target)
    copyTodos.splice(foundIndex, 1)    
    target.pin ? copyTodos.unshift(target) : copyTodos.push(target);
    setTodos(copyTodos);   
  }, [todos]);


// 날짜
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  };
  const handleDatChange = (e) => {
    setDay(e.target.value)

  };


  return (
    <>
      <GloabalStyle />

      <TodoTemplate todos={todos} >

        <TodoInsert 
        todos={todos}
        onInsert={handleInsert} 
        month={month} 
        day={day}
        onMonthChange={handleMonthChange} 
        onDayChange={handleDatChange}
        />

        <TodoList 
          todos={todos} 
          onRemove={handleRemove} 
          onToggle={handleToggle} 
          onTogglePin={handlePinToggle} 
          onTestPin={handleTestPin}
          month={month} day={day}
        />
        
      </TodoTemplate>
    </>
  );
}

export default App;
