import React from 'react'

export default interface CommentListItem {
    nickname: string;
    profileImage: string | null;
    writeDatetime: string;
    content: string;
}
