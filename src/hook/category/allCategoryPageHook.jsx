import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
const AllCategoryPageHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(5));
  }, []);

  const category = useSelector((state) => state.allCategory.category);

  let pageCount = 1;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };
  return [category, pageCount, getPage];
};

export default AllCategoryPageHook;
