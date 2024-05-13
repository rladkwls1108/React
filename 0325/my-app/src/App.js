import React from 'react';
import './App.css';

function App() {
  return (
    <div className="MyProfile" align="center">
      <h1 align="center">김도이의 자기소개</h1>
      <div className="ProfilePicture">
        <img src="/images/profile.jpg" width="200" height="200" alt="프로필 사진" />
      </div>
      <br />
      
      <div className="MyInfo" align="center">
        <h3>내 정보</h3>
        <span><p>경성대학교</p></span>
        <span><p>소프트웨어학과</p></span>
        <span><p>학번: 2022764057</p></span>
        <span><p>김도이</p></span>
      </div>
      <br /><br />
      
      <div className="introduce">
        <h3>자기소개</h3>
        <p>안녕하세요 저는 소프트웨어학과 김도이 입니다.</p>
      </div>
      <br /><br />

      <div className="social-links">
      <h3>나의 GitHub</h3>
        <a href="https://github.com/rladkwls1108/React">GitHub</a>
      </div>
    </div>
  );
}

export default App;
