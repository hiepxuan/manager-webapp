/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react"
import Select from "react-select"
import { getCategories } from "../../../services/api/categoryApiService"
export const CategoryProduct = ({
  setCategory,
  category,
  setChildCategory,
}) => {
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])

  useEffect(() => {
    const _fetchCategories = async () => {
      const { data } = await getCategories()
      setCategories(data)
    }
    _fetchCategories()
  }, [])
  const handleChange = (e) => {
    setCategory(e._id)
  }
  const handleChangeSubCategory = (e) => {
    if (subCategories.length) {
      const arr = subCategories.filter((item) => {
        return !item[e.parent_id]
      })
      setSubCategories([...arr, { [e.parent_id]: e._id }])
    } else {
      setSubCategories([{ [e.parent_id]: e._id }])
    }
  }
  useEffect(() => {
    setChildCategory(
      subCategories.map((item) => {
        return Object.values(item).join()
      })
    )
  }, [subCategories])
  const subCategory = (array, id) => {
    const data = category && array.filter((item) => item._id.toString() === id)
    if (data.length && data[0].children.length) {
      return (
        <Fragment>
          {data[0].children.map((item1, key) => {
            return (
              <div key={key} className="d-flex flex-column flex-shirk-1 w-100">
                <label htmlFor="">{item1.label}</label>
                <Select
                  placeholder="Select Option"
                  className="basic-single"
                  classNamePrefix="select"
                  isClearable={true}
                  // defaultValue={item1.children[0]}
                  onChange={handleChangeSubCategory}
                  name="color"
                  options={item1.children}
                />
              </div>
            )
          })}
        </Fragment>
      )
    }
  }
  return (
    <>
      <h1>
        Danh mục sản phẩm <span className="text-danger ml-1">(*)</span>
      </h1>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        defaultValue={categories[0]}
        name="color"
        options={categories}
        onChange={handleChange}
      />
      <div className="d-flex gap-5 mt-5 w-100 justify-content-between">
        {subCategory(categories, category)}
      </div>
      <div className="invalid-feedback">Please select a valid state.</div>
    </>
  )
}
