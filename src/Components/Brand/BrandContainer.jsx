import React from 'react'
import { Container , Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import AllBrandPageHook from '../../hook/brand/allBrandPageHook'

const BrandContainer = ({data , loading }) => {

  return (
    <Container style={{ minHeight: "670px" }}>
    <div className="admin-content-text" style={{marginTop:'10px'}}>كل الماركات</div>
    <Row className='my-1 d-flex justify-content-between'>
     {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <BrandCard
                  key={index}
                  title={item.name}
                  img={item.image}
                 
                />
              );
            })
          ) : (
            <h4>لايوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
     
    </Row>
  </Container>
  )
}

export default BrandContainer