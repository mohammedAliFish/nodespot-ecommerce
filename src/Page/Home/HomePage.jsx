import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import DescountSection from "../../Components/Home/DescountSection";
import BrandFeature from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/products/viewHomeProductsHook";

const HomePage = () => {

  const [items] = ViewHomeProductsHook()

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductContainer products={items} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products"/>
      <DescountSection />
      <CardProductContainer products={items} title="الاكثر تقييم" btntitle="المزيد" pathText="/products"/>
      <BrandFeature title="الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
