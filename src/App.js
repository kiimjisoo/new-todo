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

  const handleToggle = useCallback((id) => {
    const copyTodos = [...todos];
    const target =  todos.find((todo) => todo.id === id);
    target.checked = !target.checked;
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    copyTodos[targetIndex] = target;
    setTodos(copyTodos);    
  }, [todos]);

  // copytodos index수 따라 완료값 변경
  // todos.length  전체 개수 나옴

  const [complete, setComplete] = useState(1);
  const [noComplete, setNoComplete] = useState(2);

  // const handleComplete = () => {
  //   {checked ? complete + 1 : complete - 1}
  // }  

  const handlePin = useCallback((id) => {
    const copyTodos = [...todos];
    const target =  todos.find((todo) => todo.id === id);
    target.pin = !target.pin;
    const targetIndex = todos.findIndex((todo) => todo.id === id);
    copyTodos[targetIndex] = target;
    setTodos(copyTodos);    
  }, [todos]);
  


  // 필터로 pin값이 true 추출 후 unshift로 배열의 시작에 요소 추가
  // 기존값 삭제 없이 상단에 추가
  // 두번째 항목 선택해도 이전 항목 재 업로드
  // 핀 누를때마다 항목 추가
  // pop 배열의 마지막 요소를 제거 제거된 요소 반환

  const handleTestPin = useCallback((id) => {
    const copyTodos = [...todos];
    const target = todos.find((todo) => todo.id === id);
    
    copyTodos.unshift(target);
    copyTodos.pop(target)
    setTodos(copyTodos);
  }, [todos]);



console.log(todos);

  return (
    <>
      <GloabalStyle />
      <TodoTemplate todos={todos} complete={complete} noComplete={noComplete} >
        <TodoInsert onInsert={handleInsert} />

        <TodoList todos={todos} 
        onRemove={handleRemove} onToggle={handleToggle} onChangePin={handlePin} 
        onTestPin={handleTestPin}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
