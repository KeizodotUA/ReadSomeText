import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { getText } from '@api/index.js';

const APIPage = () => {
    const [text, setText] = useState("");

    const fetchText = () => {
        getText().then(setText);
    };
  
    useEffect(() => {
        fetchText();
    }, []);

    return (
        <div>
             { text }
        </div>
    )
}

export default Layout()(APIPage);