import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import { useCallback, useRef, useState } from "react";



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
      checked: false
    },
    {
      id: 2,
      text: '숙제하기',
      checked: true
    },
    {
      id: 3,
      text: '운동하기',
      checked: false
    },
  ]);

  const nextId = useRef(4);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      // id: uuidv4(),
      text,
      checked: false
    };

    // *배열 추가*
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos);

    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);
  

  // *제거*
  const handleRemove = useCallback((id) => {
  //   const copyTodos = [...todos];
  //   const otherIndex = todos.findIndex((todo) => todo.id === id);
  //   copyTodos.splice(otherIndex, 1)
  //   setTodos(copyTodos);

  // }, [todos]);
  setTodos(todos => todos.filter((todo) => todo.id !== id));
}, []);


  const handleToggle = useCallback((id) => {
  //   const copyTodos = [...todos];
  //   const target = todos.find((todo) => todo.id === id);
  //   target.checked = !target.checked;
  //   const targetIndex = todos.findIndex((todo) => todo.id === id);
  //   copyTodos[targetIndex] = target;
  //   setTodos(copyTodos);
  // }, [todos]);

  setTodos(todos => todos.map((todo) => 
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
));
}, []);


  return (
    <>
      <GloabalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;
