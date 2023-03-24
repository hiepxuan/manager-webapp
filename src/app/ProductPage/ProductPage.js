/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import queryString from "query-string"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PFTable from "../../Components/Tables/PFTable"
import { PFPagePagination } from "../../helpers/PFPagePagination"
import { getProducts } from "../../services/api/productService"
import ProductPageBody from "./ProductPageBody"
import ProductPageTableHead from "./ProductPageTableHead"
import { ModalImagePwoduct } from "./ModalImagePwoduct"

const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [limit, setLimit] = useState(10)
  const [title, setTitle] = useState(null)
  const [loading, setLoading] = useState(false)

  let timer = null

  const _getProducts = async () => {
    try {
      const params = { page, limit, title }
      setLoading(true)
      const paramString = queryString.stringify(params, {
        skipNull: true,
        skipEmptyString: true,
      })
      const { data, success, message } = await getProducts(paramString)

      if (!success) throw new Error(message)
      setProducts(data)
      setLoading(false)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    _getProducts()
  }, [page, limit, title])
  const _handleChangePage = (page) => {
    setPage(page)
  }

  const handleChangeLimit = (e) => {
    setLimit(e.target.value)
  }

  const onChangeSearch = (e) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setTitle(e.target.value)
      setPage(1)
    }, 800)
  }

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
          <div className="TableLength me-3 d-flex align-items-center justify-content-center ">
            <h3>Show</h3>
            <select className="ms-2 px-4" onChange={handleChangeLimit}>
              <option value="10">10 rows</option>
              <option value="20">20 rows</option>
              <option value="50">50 rows</option>
              <option value="100">100 rows</option>
            </select>
          </div>
          <div className="TableLength me-3 d-flex align-items-center justify-content-center">
            <h3>Category</h3>
            <select className="ms-2 px-4">
              <option value="10">10 rows</option>
              <option value="20">20 rows</option>
              <option value="50">50 rows</option>
              <option value="100">100 rows</option>
            </select>
          </div>
          <div className="filter-price me-3 d-flex align-items-center justify-content-center">
            <h3>Price</h3>
          </div>
          <div className="form-group me-3 SearchProduct d-flex  align-items-center">
            <label className="m-0 me-2">Title</label>
            <input
              onChange={onChangeSearch}
              type="text"
              className="form-control"
              id="SearchTitleProductMockup"
              name="title"
              placeholder="Enter search product mockup ..."
            />
            <FontAwesomeIcon icon={faSearch} className="SearchIcon" />
          </div>
        </div>
      </div>
      <div className="SectionInner">
        <div>
          <PFTable>
            <ProductPageTableHead />
            <ProductPageBody loading={loading} products={products} />
          </PFTable>
          <PFPagePagination
            page={page}
            pages={pages}
            onChangePage={_handleChangePage}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
