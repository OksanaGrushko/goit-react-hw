import React, { Component } from 'react';
import filmsAppi from '../services/filmsAppi';

export default class Revievs extends Component {
    state = {
        revievs: [],
    };

    componentDidMount() {
        filmsAppi
            .fetchShowWithRevievs(this.props.match.params.movieId)
            .then(revievs => this.setState({ revievs }));
    }

    render() {
        const { revievs } = this.state;
        console.log('revievs', { revievs });

        return revievs ? (
            <ul>
                {revievs.map(info => (
                    <li key={info.id}>
                        <h5>Author: {info.author}</h5>
                        <p>{info.content}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>We don't have any reviews for this movie.</p>
        );
    }
}
