import React from 'react';
import './CatalogItem.css';
import CatalogItemTable from './CatalogItemTable';
import CatalogImage from './CatalogImage';
import CatalogItemDescription from './CatalogItemDescription';

function CatalogItem(props) {
    var result = props.result;
    if(result){
        return (
            <div className="catalog-item">
                <table className='catalog-item-table'>
                    <tr>
                        <td colspan="2">
                        <CatalogItemDescription description={result.description}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CatalogItemTable result={result}/>
                        </td>
                        <td>
                            <CatalogImage result={result} url={props.url}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default CatalogItem;
