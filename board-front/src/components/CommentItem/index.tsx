import React from 'react'
import './css/style.css'
import basicProfileImage from 'assets/image/profile.svg'
import { CommentListItem } from 'types/interface'

interface Props {
	commentListItem: CommentListItem
}
export default function CommentItem({ commentListItem }: Props) {
    
    const { nickname, profileImage, writeDatetime, content } = commentListItem;
	
    return (
        <div className='commont-list-item'>
            {/* 댓글자 프로필 */}
            <div className='top'>
                <div className='profile-box'>
                    <div className='profile-image' style={{backgroundImage: `url(${profileImage? profileImage : basicProfileImage})`}}></div>
                </div>
                <div className='nickname bodyB14x'>{nickname}</div>
                <div className='divider body14x'>{'\|'}</div>
                <div className='time body14x'>{writeDatetime}</div>
            </div>

            {/* 댓글내용 */}
            <div className='main'>
                <div className='content body16x'>{content}</div>
            </div>
        </div>
    )
}
