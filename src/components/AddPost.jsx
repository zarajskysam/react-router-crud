import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ToMainPage from './ToMainPage';
import PostContext from '../context/postContext';


export default function AddPost() {

    const db = useContext(PostContext);

    const [ form, setForm ] = useState(null);
    const history = useHistory();

    async function addContent() {
        if (!form) {
            alert ('Введите контент');
            return;
        }
        await fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify({id: 0, content: form}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        history.push('/');
    }

    function changeContent(e) {
        e.preventDefault();
        setForm(e.target.value);
    }
    
    
    
    return (
        <React.Fragment>
            <ToMainPage />
            <div className="post">
                <textarea type="text" className="new-post_input" onChange={(e) => changeContent(e)}/>
                <button className="new-post_submit" onClick={addContent}>Опубликовать</button>
            </div>
        </React.Fragment>
    )
} 