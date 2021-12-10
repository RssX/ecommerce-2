import React from 'react';
import ShopData from './shopData';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.js';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    
    render() {
        const {collections} = this.state;
        collections.map(item=>console.log(collections.item))
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;