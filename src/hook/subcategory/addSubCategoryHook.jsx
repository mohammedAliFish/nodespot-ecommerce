
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { useEffect, useState } from "react";
import notify from "./../../hook/useNotifacation";
import { createSubCategory } from "./../../redux/actions/subcategoryAction";
const AddSubCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("هنالك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, []);

  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  //get last category data from redux
  const category = useSelector((state) => state.allCategory.category);
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  const handelChange = (e) => {
    console.log(e.target.value);
    setID(e.target.value);
  };
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }
    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف  ", "warn");
      return;
    }
    setLoading(true);
    await dispatch(createSubCategory({ name, category: id }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");
      //Error AxiosError: Request failed with status code 400
      if (subcategory.status === 201) {
        notify("تمت الاضافة بنجاح ", "success");
      } else if (
        subcategory === "Error AxiosError: Request failed with status code 400"
      ) {
        notify("هذة الاسم مكرر  ", "warn");
      } else {
        notify("هنالك مشكلة في عملية الاضافة", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handelChange,
    handelSubmit,
    onChangeName,
  ];
};

export default AddSubCategoryHook;
