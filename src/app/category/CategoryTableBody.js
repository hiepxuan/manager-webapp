import React, { Fragment, useState } from "react"

import "react-dropdown-tree-select/dist/styles.css"
import MenuItem from "./createCategory/MenuItem"

export default function CategoryTableBody({
  categories,
  data,
  selectedCheckbox,
  setSelectedCheckbox,
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
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
    </Fragment>
  )
}
