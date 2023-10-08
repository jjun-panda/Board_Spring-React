import React, { useEffect, useState } from 'react';
import './App.css';
import BoardItem from 'components/BoardListItem';
import { latestBoardListMock } from 'mocks';

function App() {
    // 다크 모드 설정 상태 변수
    const [darkMode, setDarkMode] = useState(false);

    // 다크 모드 토글 함수
    const toggleDarkMode = () => {
      const htmlElement = document.documentElement;
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      setDarkMode(!darkMode);
      localStorage.setItem('userDarkModePreference', newTheme); // 사용자 모드 설정 저장
      let degree = 0;
      const intervalId = setInterval(() => {
        degree += 3;
        if (degree >= 360) {
          clearInterval(intervalId);
        }
        const sampleElement = document.querySelector('#themeMode') as HTMLElement;
        if (sampleElement) {
          sampleElement.style.transform = `scale(1) rotate(${degree}deg)`;
        }
      }, 1);
    };

    useEffect(() => {
      const userModePreference = localStorage.getItem('userDarkModePreference');
      if (userModePreference === 'dark' || userModePreference === 'light') {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme', userModePreference);
        setDarkMode(userModePreference === 'dark');
      }
    }, []);

    const buttonLabel = darkMode ? '🌜' : '🌞';
    
  return (
    <>
      {latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem} />)}
      <button id="themeMode" className="themeMode title32x" onClick={toggleDarkMode}>
        {buttonLabel}
      </button>
    </>
  );
}

export default App;
