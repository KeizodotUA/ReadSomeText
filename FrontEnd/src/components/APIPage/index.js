// Absolute imports
import React, { useState, useEffect } from 'react';

// Components
import Layout from '../Layout';

// API
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