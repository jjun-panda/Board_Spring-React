import React from 'react'
import './css/style.css'
import basicProfileImage from 'assets/image/profile.svg'
import { FavoriteListItem } from 'types/interface';

interface Props {
	favoriteListItem: FavoriteListItem
}
export default function FavoriteItem({ favoriteListItem }: Props) {

	const { profileImage, nickname } = favoriteListItem;

    return (
        <div className='favorite-list-item'>
			<div className='profile-box'>
				<div className='profile-image' style={{backgroundImage: `url(${profileImage? profileImage : basicProfileImage})`}}></div>
			</div>
			<div className='nickname bodyB14x'>{nickname}</div>
		</div>
    )
}
