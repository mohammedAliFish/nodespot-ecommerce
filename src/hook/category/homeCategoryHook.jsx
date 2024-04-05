import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const HomeCategoryHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllCategory());
    }, []);
  //get last category data from redux
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    const colors = [
      "#ffd3e8",
      "#f4dba5",
      "#55cfdf",
      "#0034ff",
      "#ffd3e8",
      "#ff6262",
    ];

    return[loading, category, colors]
}

export default HomeCategoryHook