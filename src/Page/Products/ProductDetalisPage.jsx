import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from './../../Components/Products/CardProductContainer';

const ProductDetalisPage = () => {
  
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryHeader/>
        <Container>
            <ProductDetalis/>
            <RateContainer/>
            <CardProductContainer title="منتجات قد تعجبك"/>
        </Container>
    </div>
  )
}

export default ProductDetalisPage