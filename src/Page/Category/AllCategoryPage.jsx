import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllCategoryPageHook from "../../hook/category/allCategoryPageHook";
const AllCategoryPage = () => {
 
  const [category,pageCount,getPage] = AllCategoryPageHook()

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
