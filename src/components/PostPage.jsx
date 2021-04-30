import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostContext from '../context/postContext';
import ToMainPage from './ToMainPage';
import PostCard from './PostCard';
import EditCard from './EditCard';

export default function PostPage({match}) {

    const db = useContext(PostContext);
    const [ edit, setEdit ] = useState(false);
    const id = Number(match.params.id);
    const post = db.find(item => item.id === id);
    const history = useHistory();

    async function deletePost() {
        const responce = await fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE'
        });
        await history.push('/');
    }

    function editPost() {
        setEdit(true);
    }

    function toMainPage() {
        history.replace('/');
    }

    async function handleSubmit(form) {
        await fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify({id: post.id, content: form}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await setEdit(false);
        await history.push('/');
        await history.push(`posts/${id}`)
    }

    return (
        <div className='post_page'>
            <ToMainPage />
            { edit ? <EditCard post={post} handleSubmit={handleSubmit}/> : <PostCard deletePost={deletePost} editPost={editPost} post={post}/> }
        </div>
    ) 

}


