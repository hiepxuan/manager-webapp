import { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import "react-dropdown-tree-select/dist/styles.css"
import { Link } from "react-router-dom"
import { getCategories } from "../../services/api/categoryApiService"
import MenuItem from "./createCategory/MenuItem"

const Category = () => {
  const [categories, setCategories] = useState([])
  const [selectedCheckbox, setSelectedCheckbox] = useState("")
  useEffect(() => {
    const _fetchCategories = async () => {
      const { data } = await getCategories()
      setCategories(data)
    }
    _fetchCategories()
  }, [])

  return (
    <div className="CategoryPage">
      <div className="ProductPageHeader d-flex align-items-center justify-content-between mb-4 ">
        <div className="d-flex justify-content-between">
          <h2 style={{ minWidth: "200px" }}>Danh mục sản phẩm</h2>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              disabled={selectedCheckbox ? false : true}
            >
              Thao tác
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Xóa</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sửa</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Link to={"create"} className="d-flex justify-content-end ">
          <button className="px-2">Thêm danh mục</button>
        </Link>
      </div>

      <div className="SectionInner">
        <h1 className="mb-5">Danh sách danh mục</h1>
        <div>
          {/* <PFTable>
            <CategoryTableHead />
            <CategoryTableBody
              categories={categories}
              selectedCheckbox={selectedCheckbox}
              setSelectedCheckbox={setSelectedCheckbox}
            />
          </PFTable> */}
          {categories.map((item, index) => (
            <tr>
              <td>{/* <input type="checkbox" name="" id="" /> */}</td>
              <td>
                <ul className="" style={{ listStyle: "none" }}>
                  <MenuItem
                    key={item.id}
                    item={item}
                    selectedCheckbox={selectedCheckbox}
                    setSelectedCheckbox={setSelectedCheckbox}
                  />
                </ul>
              </td>
            </tr>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
