import React from "react";
import BrandCard from "./BrandCard";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import HomeBrandHook from "./../../hook/brand/homeBrandHook";

const BrandFeature = ({ title, btntitle }) => {
  const [loading, brand] = HomeBrandHook();
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand ? (
            brand.data.slice(0, 5).map((item, index) => {
              return (
                <BrandCard key={index} img={item.image} />
              );
            })
          ) : (
            <h4>لا توجد اي ماركة </h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandFeature;
