import React from 'react';
import './CatalogItemTable.css';

function CatalogItemTable(props) {
    var result = props.result;
    return (
        <div className="outline-catalog-table">
            <table className='table'>
                <tr><td>Messier</td><td>{result.id}</td></tr>
                <tr><td>NGC</td><td> {result.ngc}</td></tr>
                <tr><td>Type</td><td>{result.type}</td></tr>
                <tr><td>Magnitude</td><td>{result.magnitude}</td></tr>
                <tr><td>Size</td><td>{result.size}</td></tr>
                <tr><td>Distance</td><td>{result.distance}</td></tr>
                <tr><td>RA</td><td>{result.ra}</td></tr>
                <tr><td>DEC</td><td>{result.dec}</td></tr>
                <tr><td>Constellation</td><td>{result.constellation}</td></tr>
                <tr><td>Season</td><td>{result.season}</td></tr>
                <tr><td>Name</td><td>{result.name}</td></tr>
            </table>
        </div>
    )
}

export default CatalogItemTable;
