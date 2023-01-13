import './Table.css';
import React, { useState } from "react";
import axios from "axios";

function Table(props) {
    const [results, setResults] = useState([]);


    axios.get(props.url,  {auth: {
      username: 'user',
      password: 'password'
    }})
    .then(response => setResults(response.data))
    .catch(error => console.log(error));
  
    return (
      <div>
        <header>
          <div>
            <table>
              <thead>
              <tr>
                {props.headers.map(function (header, i) {
                  return (
                    <th>{header}</th>
                  );
                })}
              </tr>
              </thead>
              <tbody>
                {results.map(function (row, i) {
                  return (
                    <tr>
                      {Object.values(row).map(function (element, i) {
                      return (
                        <td>{element}</td>
                      );
                      })}
                    </tr>
                  );
                })}
                </tbody>
            </table>
          </div>
        </header>
      </div>
    );
}

export default Table;