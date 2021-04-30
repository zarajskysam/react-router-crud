import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostContext from '../context/postContext';


export default function PostProvider(props) {

    const { change } = props;
    const [ db, setDb ] = useState([]);
    let location = useLocation();
    const [ loading, setLoading ] = useState(true);

    useEffect (() => {
        const getDB = async () => {
            const response = await fetch('http://localhost:7777/posts');
            const data = await response.json();
            setDb(data);
            console.log(data);
            setLoading(false);
        }
        getDB();
    }, [location])

    return (
        <PostContext.Provider value={db}>
            { loading ? <div>Loading...</div> : props.children}
        </PostContext.Provider>
    )
}