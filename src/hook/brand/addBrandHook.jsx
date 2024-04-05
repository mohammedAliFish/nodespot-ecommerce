import { useState, useEffect } from "react";
import notify from "../../hook/useNotifacation";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { createBrand } from './../../redux/actions/brandAction';
const AddBrandHook = () => {
   
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeName = (event) => {
    event.persist()
    setName(event.target.value);
  };

  const onImageChange = (event) => {
    //when user change image save it
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allBrand.brand);

  // save data in backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || selectedFile === null) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setTimeout(() => setLoading(false), 1000);
    if (res.status === 201) {
      notify("تمت عملية الاضافة بنجاح", "success");
    } else {
      notify("هناك مشكلة في عملية الاضافة", "error");
    }
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);
      setIsPress(false);
    }
  }, [loading]);
  return [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AddBrandHook;
