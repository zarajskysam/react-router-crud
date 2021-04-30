import React from 'react';
import { useHistory } from 'react-router-dom';

function ToMainPage() {

    const history = useHistory();

    function toMainPage () {
        history.replace('/');
    }

    return (
        <div className="new-post_close" onClick={() => toMainPage()}>&#10005;</div>
    )
}

export default ToMainPage
