import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState, todoState } from 'states/todo';

function App() {
  // const [todo, setTodo] = useState({
  //   id: 1,
  //   title: '',
  // });
  // const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useRecoilState(todoState);
  const [todos, setTodos] = useRecoilState(todosState);

  const 투두입력 = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const 투두저장 = () => {
    let arr = [...todos, todo];
    setTodos(arr);
    setTodo({ id: todo.id + 1, title: '' });
  };

  const 투두삭제 = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    console.log(newTodos);
  };

  const 투두수정 = (todo) => {
    const newTitle = window.prompt('수정해주세요', todo.title);

    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: newTitle };
      } else {
        return t;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-50">
      <div className="p-3 bg-white rounded-md">
        <div>
          <input
            type="text"
            className="p-1 border"
            value={todo.title}
            onChange={투두입력}
          />
          <button className="p-1 border" onClick={투두저장}>
            생성
          </button>
        </div>
        <div>
          {todos.map((item) => {
            return (
              <div className="flex justify-between p-1 border" key={item.id}>
                <p>
                  {item.id}번 {item.title}
                </p>
                <div>
                  <button className="border" onClick={() => 투두수정(item)}>
                    수정
                  </button>
                  <button className="border" onClick={() => 투두삭제(item.id)}>
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
