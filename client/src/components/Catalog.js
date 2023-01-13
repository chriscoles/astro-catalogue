import { useState, useEffect} from "react";
import React from 'react';
import './Catalog.css';
import axios from "axios";
import CatalogSelection from './CatalogSelection';
import CatalogItem from './CatalogItem';
import CatalogTitle from "./CatalogTitle";

function Catalog(props) {

    const [result, setResult] = useState();

    function updateCatalogItem(id){
        axios.get(props.url + "messier/select",  {auth: {
            username: 'user',
            password: 'password'
          },
           params: { messier: id } })
          .then(response => setResult(response.data))
            .catch(error => console.log(error));
    }

    return (
        <div className="outline-catalog">
            <CatalogTitle />
            <CatalogSelection event={updateCatalogItem} url={props.url}/>
            <CatalogItem result={result} url={props.url}/>
        </div>
    )
}

export default Catalog;
