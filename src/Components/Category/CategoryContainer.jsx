import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

const CategoryContainer = ({data}) => {
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = [
    "#ffd3e8",
    "#f4dba5",
    "#55cfdf",
    "#0034ff",
    "#ffd3e8",
    "#ff6262",
  ];

  return (
    <Container style={{ minHeight: "670px" }}>
      <div className="admin-content-text" style={{ marginTop: "10px" }}>
        كل التصنيفات
      </div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) +1]}
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
  );
};

export default CategoryContainer;
