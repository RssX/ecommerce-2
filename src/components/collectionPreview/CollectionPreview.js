import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collectionItem/collectionItem';

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <div className='preview'>
                {items.filter((item,index)=>index<4).map(({id, ...itemProps})=>(
                    <CollectionItem key={id} {...itemProps} ></CollectionItem>
                )
                )}
            </div>
        </div>
    )
};


export default CollectionPreview;