import React from 'react';
import './Dropdown.css';

function Dropdown(props) {
    return (
        <select onChange={e => props.event(e.target.value)}
        className="custom-select">
        {props.values.map(function (value, i) {
            return (
            <option value={value}>{props.labels[i]}</option>
            );
        })}
        </select>
    )
}
export default Dropdown;