import React from 'react';

const InlineShowDetails = ({ match }) => (
    <div>Show Details {match.params.movieId}</div>
);

export default InlineShowDetails;
