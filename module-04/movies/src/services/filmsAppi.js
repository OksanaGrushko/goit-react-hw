export default {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: '71607c3510b1a3ebfcb0586b3d831a6c',

    fetchShowWithSearch(query = '') {
        return fetch(
            `${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${query}`,
        )
            .then(response => response.json())
            .then(data => data.results);
    },

    fetchShowWithTrending() {
        return fetch(`${this.baseURL}/trending/all/day?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.results);
    },

    fetchShowWithMovies(id) {
        return fetch(`${this.baseURL}/movie/${id}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => data);
    },

    fetchShowWithActors(id) {
        return fetch(
            `${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}`,
        )
            .then(response => response.json())
            .then(data => data.cast);
    },

    fetchShowWithRevievs(id) {
        return fetch(
            `${this.baseURL}/movie/${id}/reviews?api_key=${this.apiKey}`,
        )
            .then(response => response.json())
            .then(data => data.results);
    },
};
