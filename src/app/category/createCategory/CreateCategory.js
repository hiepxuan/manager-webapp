/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { Button, Col, Form } from "react-bootstrap"
import { toast } from "react-toastify"
import { Row } from "reactstrap"
import {
  createCategory,
  getCategories,
} from "../../../services/api/categoryApiService"
export default function CreateCategory() {
  const [categories, setCategories] = useState([])
  const [categoryParent, setCategoryParent] = useState(null)
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  useEffect(() => {
    const _fetchCategories = async () => {
      const { data } = await getCategories()

      setCategories(data)
    }
    _fetchCategories()
  }, [])

  function flattenOptions(options, prefix = "") {
    return options.reduce((acc, option) => {
      const name = prefix ? `${prefix} > ${option.name}` : option.name
      acc.push({ id: option._id, name, parent_id: option.parent_id })
      if (option.children) {
        acc = acc.concat(flattenOptions(option.children, name))
      }
      return acc
    }, [])
  }
  const optionCategory = flattenOptions(categories)
  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      setLoading(true)
      // eslint-disable-next-line no-unused-vars
      const { success, data } = await createCategory(name, categoryParent)
      if (success) {
        toast("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        window.location.reload()
      }
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Thêm danh mục mới</h1>
      <Form md="3" noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="SectionInner">
          <h1>Chọn danh mục cha</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Row>
                <label htmlFor="">Danh mục cha</label>
                <Form.Select
                  style={{ fontSize: "16px" }}
                  onChange={(e) => setCategoryParent(e.target.value)}
                >
                  <option selected disabled>
                    Chọn
                  </option>
                  {optionCategory &&
                    optionCategory.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item.name}
                        </option>
                      )
                    })}
                </Form.Select>
              </Row>
            </Form.Group>
          </Row>
        </div>
        <div className="SectionInner">
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="vd: Điện Thoại ..."
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập !
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className="SectionInner FooterCreate">
          <div className="">
            <Button variant="primary" type="submit" className="py-3">
              Tạo Danh Mục
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
