import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Post from './Post';
import PostContext from '../context/postContext';

export default function PostList (props) {

    const db = useContext(PostContext);
    const history = useHistory();

    function postInfo(id) {
        history.push(`/posts/${id}`)
    }
 
    
    return (
        <div className="posts">
            {db.map(item => (
                <Post key={nanoid()}  info={item} postClick={() => postInfo(item.id)}/>
            ))}
        </div>
    )
} 