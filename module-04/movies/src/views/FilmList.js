import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = ({ shows, location }) => (
    <ul>
        {shows &&
            shows.map(show => (
                <li key={show.id}>
                    <Link
                        to={{
                            pathname: `/movies/${show.id}`,
                            state: { from: location },
                        }}
                    >
                        {show.title ? show.title : show.name}
                    </Link>
                </li>
            ))}
    </ul>
);

export default FilmList;
