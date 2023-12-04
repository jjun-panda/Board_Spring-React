import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import './css/style.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from 'constant';
import { useCookies } from 'react-cookie';
import { useBoardStore, useLoginUserStore } from 'stores';
import BoardDetail from 'views/Board/Detail';

export default function Header() {

    // 로그인 유저 상태
    const { loginUser, setLoginUser, resetLoginUser } = useLoginUserStore();
    // path 상태
    const { pathname } = useLocation();
    // cookie 상태
    const [cookie, setCookie] = useCookies();
    // 로그인 상태
    const [isLogin, setLogin] = useState<boolean>(false);
    // 인증 페이지 상태
    const [isAuthPage, setAuthPage] = useState<boolean>(false);
    // 메인 페이지 상태
    const [isMainPage, setMainPage] = useState<boolean>(false);
    // 검색 페이지 상태
    const [isSearchPage, setSearchPage] = useState<boolean>(false);
    // 게시물 상세 페이지 상태
    const [isBoardDetailPage, setBoardDetailPage] = useState<boolean>(false);
    // 게시물 작성 페이지 상태
    const [isBoardWritePage, setBoardWritePage] = useState<boolean>(false);
    // 게시물 수정 페이지 상태
    const [isBoardUpdatePage, setBoardUpdatePage] = useState<boolean>(false);
    // 유저 페이지 상태
    const [isUserPage, setUserPage] = useState<boolean>(false);

    // 네비게이트 함수
    const navigate = useNavigate();
    //  로고 클릭 이벤트
    const onLogoClickHandler = () => {
        navigate(MAIN_PATH());
    }
    // 검색 버튼 컴포넌트
    const SearchButton = () => {
        // 검색어 입력 요소 참조 상태
        const searchButtonRef = useRef<HTMLDivElement | null>(null);
        // 검색 버튼 상태
        const [status, setStatus] = useState<boolean>(false);
        // 검색어 상태
        const [word, setWord] = useState<string>('');
        // 검색어 path variable 상태
        const { searchWord } = useParams();

        // 검색어 변경 이벤트 처리
        const onSearchWordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setWord(value);
        }

        // 검색어 키 이벤트 처리
        const onSearchWordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            if (!searchButtonRef.current) return;
            searchButtonRef.current.click();
        };
        // 검색어 버튼 클릭 이벤트 처리
        const onSearchButtonClickHandler = () => {
            if (!status) {
                setStatus(!status);
                return
            }
            navigate(SEARCH_PATH(word))
        };

        // 검색어 path variable 변경 시 실행
        useEffect (() => {
            if (searchWord) {
                setWord(searchWord);
                setStatus(true);
            }
        }, [searchWord]);

        if (!status)
        // 클릭: false 상태
        return (
            <div className='icon-button' onClick={onSearchButtonClickHandler}>
                <div className='icon search-icon'></div>
            </div>
        );
        // 클릭: true 상태
        return (
            <div className='search-input-box'>
                <input className='search-input field16x' type='text' placeholder='검색어를 입력해주세요.' value={word} onChange={onSearchWordChangeHandler} onKeyDown={onSearchWordKeyDownHandler} />
                <div ref={searchButtonRef} className='icon-button' onClick={onSearchButtonClickHandler}>
                    <div className='icon search-icon '></div>
                </div>
            </div>
        );
    }

    // 로그인 또는 마이페이지 버튼 컴포넌트
    const MyPageButton = () => {

        // userEmail Path 변수 상태
        const { userEmail } = useParams();
        // 마이페이지 버튼 클릭 이벤트 처리 함수
        const onMyPageButtonClickHandler = () => {
            if (!loginUser) return;
            const { email } = loginUser;
            navigate(USER_PATH(email));
        }
        // 로그아웃 버튼 클릭 이벤트 처리 함수
        const onSignOutButtonClickHandler = () => {
            resetLoginUser();
            navigate(MAIN_PATH());
        }
        // 로그인 버튼 클릭 이벤트 처리 함수
        const onSignInButtonClickHandler = () => {
            navigate(AUTH_PATH());
        }

        if (isLogin && userEmail === loginUser?.email)
        // 로그아웃
        return (
            <div className='white-button button16x' onClick={onSignOutButtonClickHandler}>{'로그아웃'}</div>
        )
        if  (isLogin)
        // 마이페이지
        return (
            <div className='white-button button16x' onClick={onMyPageButtonClickHandler}>{'마이페이지'}</div>
        )
        // 로그인
        return (
            <div className='black-button button16x' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
        )
    }

    // 업로드 버튼 컴포넌트
    const UploadButton = () => {
        //  게시물 상태
        const { title, content, boardImageFileList, resetBoard } = useBoardStore();
        // 업로드 버튼 클릭 이벤트
        const onUploadButtonClickHandler = () => {
            
        }
        // 업로드 버튼
        if (title && content)
        return (
            <div className='black-button button16x' onClick={onUploadButtonClickHandler}>{'업로드'}</div>
        )
        // 업로드 불가 버튼
        return (
            <div className='disable-button button16x'>{'업로드'}</div>
        )
    };

    // path가 변경 괼 때 마다 실행될 함수
    useEffect(() => {
        const isAuthPage = pathname.startsWith(AUTH_PATH());
        setAuthPage(isAuthPage);
        const isMainPage = pathname === MAIN_PATH();
        setMainPage(isMainPage);
        const isSearchPage = pathname.startsWith(SEARCH_PATH(''));
        setSearchPage(isSearchPage);
        const isBoardDetailPage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_DETAIL_PATH(''));
        setBoardDetailPage(isBoardDetailPage);
        const isBoardWritePage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_WRITE_PATH());
        setBoardWritePage(isBoardWritePage);
        const isBoardUpdatePage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_UPDATE_PATH(''));
        setBoardUpdatePage(isBoardUpdatePage);
        const isUserPage = pathname.startsWith(USER_PATH(''));
        setUserPage(isUserPage);
    }, [pathname])
    
    return (
        <div id='header'>
            <div className='container'>
                <div className='left-box' onClick={onLogoClickHandler}>
                    <div className='logo-box'>
                        <div className='logo logo-img'></div>
                    </div>
                </div>
                <div className='right-box'>
                    {(isAuthPage || isMainPage || isSearchPage || isBoardDetailPage) && <SearchButton />}
                    {(isMainPage || isSearchPage || isBoardDetailPage || isUserPage) && <MyPageButton />}
                    {(isBoardWritePage || isBoardUpdatePage) && <UploadButton />}
                </div>
            </div>
        </div>
    )
}
