import React, { Component } from 'react';
import FilmList from './FilmList';
import filmsAppi from '../services/filmsAppi';

export default class HomePage extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        filmsAppi
            .fetchShowWithTrending()
            .then(shows => this.setState({ shows }));
    }
    render() {
        const { shows } = this.state;

        return (
            <div>
                <h2>Trending today</h2>
                {shows.length > 0 && (
                    <FilmList shows={shows} location={this.props.location} />
                )}
            </div>
        );
    }
}
