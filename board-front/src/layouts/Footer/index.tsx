import React from 'react'
import './css/style.css'

export default function Footer() {

    const onInstaButtonClickHandler = () => {
        window.open('https://www.instagram.com')
    }
    const onKakaoButtonClickHandler = () => {
        window.open('https://www.kakaocorp.com')
    }
    const onYoutubeButtonClickHandler = () => {
        window.open('https://www.youtube.com')
    }
    const onNaverBlogButtonClickHandler = () => {
        window.open('https://section.blog.naver.com')
    }
    const onFacebookButtonClickHandler = () => {
        window.open('https://www.facebook.com')
    }
    return (
        <div id='footer'>
            <div className='container'>
                {/* footer 상단 */}
                <div className='top'>
                    <div className='logo-box'>
                        <div className='logo logo-img'></div>
                    </div>
                    <div className='link-box'>
                        <div className='email-link'></div>
                        <div className='icon-button' onClick={onInstaButtonClickHandler}>
                            <div className='icon insta-icon'></div>
                        </div>
                        <div className='icon-button'  onClick={onNaverBlogButtonClickHandler}>
                            <div className='icon naver-blog-icon'></div>
                        </div>
                        <div className='icon-button'  onClick={onYoutubeButtonClickHandler}>
                            <div className='icon youtube-icon'></div>
                        </div>
                        <div className='icon-button'  onClick={onFacebookButtonClickHandler}>
                            <div className='icon facebook-icon'></div>
                        </div>
                        <div className='icon-button'  onClick={onKakaoButtonClickHandler}>
                            <div className='icon kakao-icon'></div>
                        </div>
                    </div>
                </div>

                {/* footer 하단 */}
                <div className='bottom'>
                    <div className='copyright body14x'>{'©2023 JJUNS. All Rights Reserved.'}</div>
                </div>
            </div>
        </div>
    )
}
