import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import filmsAppi from '../services/filmsAppi';
import routes from '../routes';

export default class MoviesDetailsPage extends Component {
    state = { show: null };

    componentDidMount() {
        filmsAppi
            .fetchShowWithMovies(this.props.match.params.movieId)
            .then(show => this.setState({ show }));
    }

    handleGoBack = () => {
        const { state } = this.props.location;
        if (state && state.from) {
            return this.props.history.push(state.from);
        }

        this.props.history.push(routes.moviesPage);
    };

    render() {
        const { show } = this.state;
        const { match } = this.props;

        return (
            <div>
                {show && (
                    <>
                        <button type="button" onClick={this.handleGoBack}>
                            Back to Shows
                        </button>
                        <br />
                        <h1>{show.title ? show.title : show.name}</h1>
                        <img
                            src={
                                show.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
                                    : `non photo`
                            }
                            alt={show.tags}
                            width="200px"
                        />
                        <p>User Score: {show.vote_average * 10}%</p>
                        <h3>Overview</h3>
                        <p>{show.overview}</p>
                        <h4>Genres</h4>
                        <ul>
                            {show.genres &&
                                show.genres.map(gen => (
                                    <li key={gen.id}>{gen.name}</li>
                                ))}
                        </ul>
                        <hr />
                        <p>Additional information</p>
                        <ul>
                            <li>
                                <Link
                                    to={{
                                        pathname: `${match.url}/cast`,
                                        state: { showId: show.id },
                                    }}
                                >
                                    Cast
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                        pathname: `${match.url}/revievs`,
                                        state: { showId: show.id },
                                    }}
                                >
                                    Revievs
                                </Link>
                            </li>
                        </ul>
                        <hr />
                        {routes.map(route => {
                            if (
                                route.label === 'Revievs' ||
                                route.label === 'Cast'
                            ) {
                                return (
                                    <Route
                                        key={route.path}
                                        exact={route.exact}
                                        {...route}
                                    />
                                );
                            }
                            return false;
                        })}
                    </>
                )}
            </div>
        );
    }
}
