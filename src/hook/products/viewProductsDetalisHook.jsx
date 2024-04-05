import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import mobile from '../../images/mobile.png'
import { getOneProduct } from './../../redux/actions/productAction';

const ViewProductsDetalisHook = (id) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])

    const oneProducts = useSelector((state) => state.allproducts.oneProduct)
    //to show products item
    let item = [];
    if (oneProducts.data)
        item = oneProducts.data;
    else
        item = []

     
    


    //to view images gallery
    let images = []
    if (item.images)
        images = item.images.map((img) => { return { original: img } })
    else {
        images = [{ original: `${mobile}` }]
    }

    return [item, images]

    
}

export default ViewProductsDetalisHook