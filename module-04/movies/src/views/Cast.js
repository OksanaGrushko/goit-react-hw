import React, { Component } from 'react';
import filmsAppi from '../services/filmsAppi';

export default class Cast extends Component {
    state = {
        actors: [],
    };

    componentDidMount() {
        filmsAppi
            .fetchShowWithActors(this.props.match.params.movieId)
            .then(actors => this.setState({ actors }));
    }

    render() {
        const { actors } = this.state;

        return actors ? (
            <ul>
                {actors.map(
                    actor =>
                        actor.profile_path !== null && (
                            <li key={actor.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                    alt={actor.original_name}
                                    width="80px"
                                />
                                <p>{actor.name}</p>
                                <p>Character: {actor.character}</p>
                            </li>
                        ),
                )}
            </ul>
        ) : (
            <p>We don't have any actors for this movie.</p>
        );
    }
}
