import { getOneCategory } from "../../redux/actions/subcategoryAction";
import { createProduct } from "../../redux/actions/productAction";
import notify from "./../../hook/useNotifacation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
const AdminAddProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, []);
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);

  const subCat = useSelector((state) => state.subCategory.subcategory);

  const onSelect = (selectedList) => {
    console.log(selectedSubID);

    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    console.log(selectedSubID);

    setSelectedSubID(selectedList);
  };
  const [images, setImages] = useState([]);

  const [options, setOptions] = useState([]);

  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [CatID, setCatID] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  const onChangePriceBefor = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  const [showColor, setShowColor] = useState(false);

  const [colors, setColors] = useState([]);

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const onSelectCategory = async (e) => {
    if (e.target.value != 0) {
      await dispatch(getOneCategory(e.target.value));
    }
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID != 0)
      if (subCat.data) {
        setOptions(subCat.data);
      }
  }, [CatID]);

  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  // conver the image from base64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (
      CatID === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

    // this array start from zero and stop in the specific number and convert array of images base 64 to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", CatID);
    formData.append("brand", BrandID);
    colors.map((color) => formData.append("availableColors", color));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    itemImages.map((item) => formData.append("images", item));
    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  const product = useSelector((state) => state.allproducts.products);

  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1000);

      if (product) {
        if (product.status === 201) {
          notify("تم اضافة المنتج", "success");
        } else {
          notify("هنالك مشكلة", "error");
        }
      }
    }
  }, [loading]);
  return [
    onChangeProdName,
    onChangeDesName,
    onChangePriceBefor,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor,
    showColor,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSelectCategory,
    handelSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ];
};

export default AdminAddProductsHook;
