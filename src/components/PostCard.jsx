import React from 'react';
import Post from './Post';

function PostCard({post, deletePost, editPost}) {

    return (
        <Post info={post}>
            <button className='post_page_edit' onClick={editPost}>Редактировать</button>
            <button className='post_page_delete' onClick={deletePost}>Удалить</button>
        </Post>
    )
}

export default PostCard
