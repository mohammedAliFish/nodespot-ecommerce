import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrand,
  getAllBrandPage,
} from "../../redux/actions/brandAction";
const AllBrandPageHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand(4));
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  let pageCount = 1;
  if (brand.paginationResult)
    pageCount = brand.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };
  return [brand,loading, pageCount, getPage];
};

export default AllBrandPageHook;
