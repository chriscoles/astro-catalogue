import React from 'react';
import {useState} from "react";
import './CatalogImage.css';
import axios from "axios";

function CatalogImage(props) {

    const [image, setImage] = useState();
    
    var result = props.result;

    function updateCatalogImage(){
        console.log("image");
        axios.get(props.url + "messier/messier-image", {
            auth: {
                username: 'user',
                password: 'password'
            },
            params: { messier: result.id },
            responseType: "arraybuffer"
            })
            .then((res) => {
            const base64 = btoa(
            new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
            )
            )
            setImage(base64)
        })
    }

    updateCatalogImage();

    return (
        <div className="outline-catalog-image">
            <img src={`data:;base64,${image}`} className="image"/>
        </div>
    )
}

export default CatalogImage;
