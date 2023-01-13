import { useState, useEffect} from "react";
import React from 'react';
import './CatalogSelection.css';
import Dropdown from "./common/Dropdown";
import axios from "axios";

function CatalogSelection(props) {

    const [ids, setIds] = useState([]);
    const [labels, setLabels] = useState([]);

    const updateCatalogList = async () => {

        const { data } = await axios.get(
            props.url + "messier/named-ids",  {auth: {
            username: 'user',
            password: 'password'
            }});

        const temp_ids=[];
        const temp_labels=[];
        
        for (let i = 0; i < data.length; i++) {
            const result = data[i];
            const id = result[0];
            temp_ids[i] = id;
            const name = result[1];
            if (!!name){
                temp_labels[i] = id + " (" + name + ")";
            }
            else{
                temp_labels[i] = id
            }
        }

        setIds(temp_ids);
        setLabels(temp_labels);
    }

    useEffect(() => {
        updateCatalogList();
      }, []);

    return (
        <div className="outline-catalog-selection">
            <table>
                <tr>
                    <td><h2>Messier Item</h2></td>
                    <td><Dropdown event={props.event} values={ids} labels={labels} /></td>
                </tr>
            </table>
        </div>
    )
}

export default CatalogSelection;
