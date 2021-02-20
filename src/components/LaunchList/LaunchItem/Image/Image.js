import React from 'react';
import LazyImage from '../../../Performance/LazyImage.js'
import './Image.css'

const FigureItem = React.memo((props) => {
    return (
        <figure className="figure-item">
            <LazyImage src={props.source} alt={props.name} />
        </figure>
    );
});

export default FigureItem;