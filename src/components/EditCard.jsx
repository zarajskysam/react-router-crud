import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditCard({post, handleSubmit}) {

    const [ form, setForm ] = useState(post.content);
    const history = useHistory();

    function hanldeChange(e) {
        e.preventDefault();
        setForm(e.target.value);
    }



    function onSub(e) {
        e.preventDefault();
        handleSubmit(form);
    }

    return (
        <div className="post">
            <form className="post_page_edit_form" onSubmit={(e) => onSub(e)}>
                <textarea type="text" className="post_page_edit_input" defaultValue={`${post.content}`} onChange={(e) => hanldeChange(e)}/>
                <button className="post_page_edit_submit">Сохранить</button>
            </form>
        </div>
    )
}

export default EditCard
