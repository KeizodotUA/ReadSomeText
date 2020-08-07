// Absolute imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Layout from '../Layout'

// Pseudo API
import { getRandomEntries } from '@api/Faker/index.js';

// Styled
import {
    Container,
    TableContainer,
    TableRow
} from './styled';

const initialValue = getRandomEntries();

const tablecolors = ["#fafafa", "#f2f3f5"];

const Home = () => {
    const [entries] = useState(initialValue);

    const history = useHistory();

    const rowClick = (id) => {
        history.push(`/text/${id}`);
    }

    return (
        <Container>
            <TableContainer>
                <table>
                    <thead>
                        <tr style={{ backgroundColor: "#eceef0" }}>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entries.map(entry => {
                                return <TableRow 
                                    key={entry.id} 
                                    rowColor={tablecolors[entry.id % 2]} 
                                    onClick={ () => {rowClick(entry.id)}}>
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