import React from 'react';
import './CatalogItemDescription.css';

function CatalogItemDescription(props) {
    return (
        <div className="catalog-description">
            <p>{props.description}</p>
        </div>
    )
}

export default CatalogItemDescription;
