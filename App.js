import logo from './logo.svg';
import './App.css';
import axios from 'axios'
//컴포넌트
//페이지에 렌더링할 React 엘리먼트를 반환하는 작고 재사용 가능한 코드조각
function App() {
  //JSX : 자바스크립트 코드 안에 HTML코드가 들어가는 것
  //Babel : JSX로 작성된 자바스크립트를 순수 자바스크립트로 만들어주는 라이브러리
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//해당 파일에서는 하나의 컴포넌트만을 내보낸다.dddd
//export default 구문을 사용해 내보낸 컴포넌트는 중괄호({})를 사용하지 않고
//불러올 수 있으며, 이름 또한 원하는 이름으로 바꿔서 불러올 수 있다.
export default App;
