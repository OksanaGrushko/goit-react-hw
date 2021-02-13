import React, { Component } from 'react';
import getQueryParams from '../utils/getQueryParams';
import Searchbox from '../components/Searchbox/Searchbox';
import filmsAppi from '../services/filmsAppi';
import FilmList from './FilmList';

export default class MoviesPage extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);
        if (query) {
            this.fetchShows(query);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);

        if (prevQuery !== nextQuery) {
            this.fetchShows(nextQuery);
        }
    }

    fetchShows = query => {
        filmsAppi
            .fetchShowWithSearch(query)
            .then(shows => this.setState({ shows }));
    };

    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        });
    };

    render() {
        const { shows } = this.state;

        return (
            <>
                <Searchbox onSubmit={this.handleChangeQuery} />

                {shows.length > 0 && (
                    <FilmList shows={shows} location={this.props.location} />
                )}
            </>
        );
    }
}
