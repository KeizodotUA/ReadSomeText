// Absolute imports
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Layout from '../Layout'

// Pseudo API
import { getRandomEntries } from '@api/Faker';

// Styled
import {
    Container,
    TableContainer,
    TableRow,
    TR
} from './styled';

const INITIAL_ENTRY = [{
    id: 0,
    author: "Loading",
    title: "",
    views: "",
    likes: "",
    bookmarkts: ""
}];

const Home = () => {
    const [entries, setEntries] = useState(INITIAL_ENTRY);

    const fetchEntries = () => {
        getRandomEntries()
        .then(setEntries);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    const history = useHistory();

    const rowClick = (id) => {
        history.push(`/text/${id}`);
    }

    return (
        <Container>
            <TableContainer>
                <table>
                    <thead>
                        <TR>
                            <th width="35%">
                                Author
                            </th>
                            <th width="20%">
                                Title
                            </th>
                            <th width="15%">
                                Views
                            </th>
                            <th width="15%">
                                Likes
                            </th>
                            <th width="15%">
                                Bookmarkts
                            </th>
                        </TR>
                    </thead>
                    <tbody>
                        {
                            entries.map(entry => {
                                return <TableRow
                                    key={entry.id}
                                    rowColor={entry.id % 2 == 0 ? 'dark' : 'light'}
                                    onClick={() => { rowClick(entry.id) }}>
                                    <td>{entry.author}</td>
                                    <td>{entry.title}</td>
                                    <td>{entry.views}</td>
                                    <td>{entry.likes}</td>
                                    <td>{entry.bookmarkts}</td>
                                </TableRow>
                            })
                        }
                    </tbody>
                </table>
            </TableContainer>
        </Container>

    )
}

export default Layout()(Home);