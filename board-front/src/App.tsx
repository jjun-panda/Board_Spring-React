import React, { useEffect, useState } from 'react';
import './css/App.css';
import BoardItem from 'components/BoardListItem';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';
import Footer from 'layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import Main from 'views/Main';
import User from 'views/User';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import BoardDetail from 'views/Board/Detail';
import Container from 'layouts/Container';
import { MAIN_PATH, AUTH_PATH, SEARCH_PATH, USER_PATH, BOARD_PATH, BOARD_WRITE_PATH, BOARD_UPDATE_PATH, BOARD_DETAIL_PATH } from 'constant';

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
	
	const [value, setValue] = useState<string>('');

	// description: 메인화면:			'/' //
	// description: 로그인 + 화원가입:	'/auth' //
	// description: 검색:				'/search/:word' //
	// description: 사용자 페이지:		'/user/:userEmail' //
	// description: 게시물 상세:		'/board/detail/:boardNumber' //
	// description: 게시물 작성:		'/board/write' //
	// description: 게시물 수정:		'/board/update/:boardNumber' //
	
	return (
		<>
			{/* {latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem} />)}
			<div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
				{top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
			</div> */}
			{/* <div style={{display: 'flex', columnGap: '2rem', rowGap: '1.5rem' }}>
				{favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem} />)}
			</div>
			<div style={{padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
				{commentListMock.map(commentListItem => <CommentItem commentListItem={commentListItem} />)}
			</div> */}
			{/* <InputBox labal='이메일' type='email' placeholder='이메일 주소를 입력해주세요' value={value} error={true} setValue={setValue} massage='이메일주소 다시 한번 확인해주세요' /> */}
			{/* <Footer /> */}
			<Routes>
				<Route element={<Container />}>
					<Route path={MAIN_PATH()} element={<Main />} />
					<Route path={AUTH_PATH()} element={<Authentication />} />
					<Route path={SEARCH_PATH(`:searchWord`)} element={<Search />} />
					<Route path={USER_PATH(`:userEmail`)} element={<User />} />
					<Route path={BOARD_PATH()}>
						<Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
						<Route path={BOARD_UPDATE_PATH(`:boardNumber`)} element={<BoardUpdate />} />
						<Route path={BOARD_DETAIL_PATH(`:boardNumber`)} element={<BoardDetail />} />
					</Route>
					<Route path='*' element={<h1>404 Not Found</h1>} />
				</Route>
			</Routes>
			<button id="themeMode" className="themeMode title32x" onClick={toggleDarkMode}>
				{buttonLabel}
			</button>
		</>
	);
}

export default App;
