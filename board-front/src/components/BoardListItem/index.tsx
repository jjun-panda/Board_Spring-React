import React from 'react'
import './css/style.css'
import { BoardListItem } from 'types/interface'
import { useNavigate } from 'react-router-dom';
import basicProfileImage from 'assets/image/profile.svg'

interface Props {
	boardListItem: BoardListItem
}
export default function BoardItem({ boardListItem } : Props) {

	const { boardNumber, title, content, boardTitleImage } = boardListItem;
	const { favoriteCount, commentCount, viewCount } = boardListItem;
	const { writeDatetime, writerNickname, writerProfileImage } = boardListItem;
	
	// navigator 함수
	// const navigator = useNavigate();

	//  게시물 아이템 클릭 이벤트 처리 함수
	const onClickHandler = () => {
		// navigator(boardNumber);
	}

	return (
		<div className='board-list-item' onClick={onClickHandler}>
			<div className='main-box'>
				{/* 작성자 프로필 */}
				<div className='top'>
					<div className='profile-box'>
						<div className='profile-image' style={{backgroundImage: `url(${writerProfileImage? writerProfileImage : basicProfileImage})`}}></div>
					</div>
					<div className='write-box'>
						<div className='nickname bodyB12x'>{writerNickname}</div>
						<div className='write-datetime body12x'>{writeDatetime}</div>
					</div>
				</div>

				{/* 본문 */}
				<div className='middle'>
					<div className='title title16x'>{title}</div>
					<div className='content body14x'>{content}</div>
				</div>
				
				{/* 댓글수, 좋아요, 조회수 */}
				<div className='bottom'>
					<div className='counts caption'>{`댓글 ${commentCount} | 좋아요 ${favoriteCount} | 조회수 ${viewCount}`}</div>
				</div>
			</div>
			{boardListItem !== null && (
				<div className='image-box'>
					<div className='image' style={{backgroundImage: `url(${boardTitleImage})`}}></div>
				</div>
			)}
		</div>
	)
}
