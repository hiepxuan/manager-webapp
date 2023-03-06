import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import PFTable from "../../Components/Tables/PFTable"
import ProductPageBody from "./ProductPageBody"
import ProductPageTableHead from "./ProductPageTableHead"
const ProductContainer = () => {
  return (
    <div className="ProductPage">
      <div className="ProductPageHeader d-flex justify-content-between mb-4 ">
        <h1>Products</h1>
        <Link to={"create"}>
          <button className="px-2">Create Product</button>
        </Link>
      </div>
      <div className="SectionInner">
        <div className="ProductHeader d-flex align-items-center">
          <div className="TableLength me-3">
            Show
            <select className="ms-2 px-4">
              <option value="10">10 rows</option>
              <option value="20">20 rows</option>
              <option value="50">50 rows</option>
              <option value="100">100 rows</option>
            </select>
          </div>
          <div className="TableLength me-3">
            Category
            <select className="ms-2 px-4">
              <option value="10">10 rows</option>
              <option value="20">20 rows</option>
              <option value="50">50 rows</option>
              <option value="100">100 rows</option>
            </select>
          </div>
          <div className="form-group me-3 SearchProduct d-flex  align-items-center">
            <label className="m-0 me-2">Title</label>
            <input
              type="text"
              className="form-control"
              id="SearchTitleProductMockup"
              name="title"
              placeholder="Enter search product mockup ..."
            />
            <FontAwesomeIcon icon={faSearch} className="SearchIcon" />
          </div>
        </div>
        <div>
          <PFTable>
            <ProductPageTableHead />
            <ProductPageBody />
          </PFTable>
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
