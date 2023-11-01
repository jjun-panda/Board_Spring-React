import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import './css/style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { MAIN_PATH, SEARCH_PATH } from 'constant';

export default function Header() {

    const navigate = useNavigate();
    const onLogoClickHandler = () => {
        navigate(MAIN_PATH());
    }
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
        const onSearchWordKeyDownHandler = (evnet: KeyboardEvent<HTMLInputElement>) => {
            if (evnet.key !== 'Enter') return;
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

    return (
        <div id='header'>
            <div className='container'>
                <div className='left-box' onClick={onLogoClickHandler}>
                    <div className='logo-box'>
                        <div className='logo logo-img'></div>
                    </div>
                </div>
                <div className='right-box'>
                    <SearchButton />
                </div>
            </div>
        </div>
    )
}
