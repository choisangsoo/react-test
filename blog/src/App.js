
/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(){

  let [글제목, 글제목변경] = useState(['남자 코트', '강남 우동', '세번째제목']); 
  let [따봉, 따봉변경] = useState(0); 
  //변수 대신 사용 가능 공간
  //자주 바뀌거나 중요한 데이터는 useState를 써라 필수~!!!
  //변수처럼 새로고침 안해도 재랜더링 됨
  
  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
     
      <div className="list">
          <h3>{ 글제목[0] }  <span onClick={ ()=>{ 따봉변경(따봉+1)} }>👍</span> { 따봉 } </h3>
          <p>2월 17일 발행</p>
          <hr/>
      </div>
      <div className="list">
          <h3>{ 글제목[1] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
      </div>
      <div className="list">
          <h3>{ 글제목[2] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
      </div>
    </div>
  )
}

export default App;
