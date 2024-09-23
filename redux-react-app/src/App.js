import logo from './logo.svg';
import './App.css';


//Redux와 React를 연결하는 데 필요한 Provider, useDispatch, useSelector를 import
// import { Provider, useDispatch, useSelector } from 'react-redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// //Redux 스토어를 import
import store from './cart/store';

// //액션 생성 함수를 import
// //아래 함수들은 상태를 변경하는 액션을 dispatch하기 위해 사용된다.
// import { increment, decrement } from './redux/actions';

import React, { useState } from 'react';
// import { addTodo, removeTodo } from './Todo/actions';

// import { login, logout } from './login/actions';

// function Counter(){
//   //useSelector : Redux에서 store에 저장되어 있는 state를 읽어오는 hook
//   const count = useSelector(state => state.count);

//   //useDispatch : store에 action을 보낼 수 있는 hook
//   const dispatch = useDispatch();
//   return (
//     <div>
//       {/* 현재 state인 count값을 화면에 출력한다. */}
//       <h1>Counter : {count}</h1>
//       {/* Increment 버튼을 클릭하면 increment() 액션을 디스패치한다. */}
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//     </div>
//   );
// }

// function App() {
//   const [input, setInput] = useState(''); //입력값을 관리하는 state
//   const todos = useSelector(state => state.todos); //redux에서 todos state를 가져옴
//   const dispatch = useDispatch(); //액션을 dispatch하는 함수 가져오기

//   //추가 버튼을 눌렀을 때 input태그에 있는 내용을 li에 추가하기
//   const handleAddTodo = () => {
//     if(input.trim()){ //input태그의 값이 비었는지 검사
//       dispatch(addTodo(Date.now(), input)); //id와 내용을 액션에 전송해서 dispatch가 리듀서로 전송
//       setInput(''); //입력창 비우기
//     }
//   }

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id)); //Todo를 삭제
//   }

  // return(
  // //Provider : store를 애플리케이션 전체에 제공
  // //Provider 안에 있는 모든 컴포넌트는 store에 접근할 수 있다.
  //   <Provider store={store}>
  //     <Counter />
  //   </Provider>
  // )

//   function TodoApp() {
//     const [input, setInput] = useState(''); // 입력값을 관리하는 로컬 상태
//     const todos = useSelector((state) => state.todos || []); // Redux에서 todos 상태를 가져옴
//     const dispatch = useDispatch(); // 액션을 디스패치하는 함수 가져오기
  
//     const handleAddTodo = () => {
//       if (input.trim()) {
//         dispatch(addTodo(Date.now(), input)); // 새로운 Todo를 추가 (id는 현재 시간으로 고유값 생성)
//         setInput(''); // 입력창 비우기
//       }
//     };
  
//     const handleRemoveTodo = (id) => {
//       dispatch(removeTodo(id)); // Todo를 삭제
//     };

//   return(
//     <div>
//       <h1>Todo List</h1>
//       <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a new todo' />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// function App() {
//   const [usernameInput, setUsernameInput] = useState(''); // 입력 필드 상태
//   const { isLoggedIn, username } = useSelector((state) => state); // Redux 상태에서 로그인 정보 가져오기
//   const dispatch = useDispatch(); // 액션을 디스패치하기 위한 훅

//   const handleLogin = () => {
//     if (usernameInput.trim()) {
//       dispatch(login(usernameInput)); // 로그인 액션 디스패치
//       setUsernameInput(''); // 입력 필드 초기화
//     }
//   }

//   const handleLogout = () => {
//     dispatch(logout()); // 로그아웃 액션 디스패치
//   };

//   return (
//     <div>
//       <h1>Login Status</h1>
//       {isLoggedIn ? (
//         <div>
//           <p>Welcome, {username}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             value={usernameInput}
//             onChange={(e) => setUsernameInput(e.target.value)}
//             placeholder="Enter your username"
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// }

function App(){
  
}

export default App;
