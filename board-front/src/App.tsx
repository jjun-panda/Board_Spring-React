import React, { useEffect, useState } from 'react';
import './App.css';
import BoardItem from 'components/BoardListItem';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';

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
		{/* {latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem} />)}
		<div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
			{top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
		</div> */}
		<div style={{display: 'flex', columnGap: '2rem', rowGap: '1.5rem' }}>
			{favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem} />)}
		</div>
		<div style={{padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
			{commentListMock.map(commentListItem => <CommentItem commentListItem={commentListItem} />)}
		</div>
		<button id="themeMode" className="themeMode title32x" onClick={toggleDarkMode}>
			{buttonLabel}
		</button>
	</>
	);
}

export default App;
