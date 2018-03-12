import React from 'react';
import PropTypes from 'prop-types';

const Node = ({ match }) => (<p>Node: {match.params.id}</p>);

Node.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Node;
