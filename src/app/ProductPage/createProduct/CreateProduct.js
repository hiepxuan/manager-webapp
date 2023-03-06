import { Editor } from "@tinymce/tinymce-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { Button, Col, Form, FormText, Row } from "react-bootstrap"
import { useDropzone } from "react-dropzone"
import { Input } from "reactstrap"
import generateVariants from "../../../helpers/generateVariants"
import ProductAttributesList from "./attributes/ProductAttributesList"
import VariantsTable from "./variants/VariantsTable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
const CreateProduct = () => {
  const [attributes, setAttributes] = useState([])
  const [variants, setVariants] = useState([])
  const [files, setFiles] = useState([])
  const [data, setData] = useState()
  const [tags, setTags] = useState([])
  const editorRef = useRef(null)
  const _handleAddAttribute = () => {
    if (attributes.length === 0) {
      setAttributes([
        ...attributes,
        {
          is_preselected: true,
          position: attributes.length + 1,
          type: "",
          name: "",
          values: [],
        },
      ])
    }
    let attribute = attributes[attributes.length - 1]
    const errors = {}
    if (attribute.name && attribute.values.length) {
      setAttributes([
        ...attributes,
        {
          is_preselected: true,
          position: attributes.length + 1,
          type: "",
          name: "",
          values: [],
        },
      ])
    } else {
      if (!attribute.values.length) {
        errors.value = "At least one value required"
      }
      if (!attribute.name) {
        errors.name = "can not found"
      }
      attribute = Object.assign({}, attribute, { errors })
      const newAttributes = attributes.splice(0, attributes.length - 1)
      setAttributes([...newAttributes, attribute])
    }
  }
  const onChangeAttribute = (key, vKey, value, hasVariants = false) => {
    const newAttribute =
      attributes &&
      attributes.map((item) => {
        if (item["position"] === vKey) {
          item[key] = value
        }
        return item
      })
    if (hasVariants) {
      const variants = generateVariants(attributes)
      setVariants(variants)
    }
    setAttributes(newAttribute)
  }
  useEffect(() => {
    const variants = generateVariants(attributes)
    setVariants(variants)
  }, [attributes])

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles])
    },
    [files]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const _handleChangeInput = (e) => {
    setData(e.target.value)
  }
  const _handleSubmit = (e) => {
    e.preventDefault()
    setTags([...tags, data])
    setData("")
  }

  const handleDelete = () => {}
  return (
    <div className="CreateProductPage">
      <h1>Create Product</h1>
      <Row>
        <Form.Group as={Col} md="8">
          <div className="SectionInner">
            <Form md="3">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control
                    required
                    name="name"
                    type="text"
                    placeholder="First name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập !
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Giá sản phẩm</Form.Label>

                  <Form.Control type="text" name="price" required />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập giá
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="4" className="mt-4">
                  <Form.Label>Danh mục sản phẩm</Form.Label>
                  <select
                    defaultValue={"DEFAULT"}
                    name="category_id"
                    className="custom-select ms-5 px-4"
                    id="validationCustom03"
                    // onChange={handleChange}
                    required
                  >
                    <option selected value="DEFAULT">
                      Chọn danh mục
                    </option>
                    <option value="a">Chọn danh mục</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn danh mục
                </Form.Control.Feedback>
              </Row>
              <Row>
                <Form.Group md="12" as={Col} controlId="validationCustom05">
                  <Form.Label>Mô tả sản phẩm</Form.Label>
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                      height: 500,
                      menubar: false,
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </Form.Group>
              </Row>
            </Form>
          </div>
          <div className="SectionInner">
            <h1>Product Image</h1>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Nhấn vào đây để chọn ảnh</p>
              )}
            </div>
          </div>
          <div className="SectionInner">
            {files.map((file) => (
              <img
                style={{ height: "100px", width: "200px" }}
                src={URL.createObjectURL(file)}
                key={file.name}
                alt={file.name}
              />
            ))}
          </div>
          <div className="SectionInner">
            <h1>Thuộc tính</h1>
            <p>Thêm thuộc tính cho sản phẩm</p>
            <div className="">
              {attributes.length > 0 ? (
                <ProductAttributesList
                  onChangeAttribute={onChangeAttribute}
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              ) : (
                ""
              )}
              <Button
                color="primary"
                outline
                className="mt-3 AddAttribute"
                onClick={() => _handleAddAttribute()}
              >
                Thêm thuộc tính
              </Button>
            </div>
          </div>
          <div className="SectionInner">
            <h1>Biến thể của sản phẩm</h1>
            <p>Quản lí các biến thể c</p>
            <div className="VariantsTableContainer">
              <VariantsTable attributes={attributes} variants={variants} />
            </div>
          </div>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <div className="SectionInner h-100">
            <Form onSubmit={_handleSubmit}>
              <h1>Tags</h1>
              <div className="d-flex gap-3">
                {tags.length &&
                  tags.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="d-flex gap-2 px-3 bg-primary text-white  rounded-3"
                      >
                        <span>{item}</span>
                        <p
                          onClick={() => handleDelete(item)}
                          className="pointer"
                        >
                          <FontAwesomeIcon icon={faClose} />
                        </p>
                      </div>
                    )
                  })}
              </div>
              <Input
                name="value"
                value={data}
                autoComplete="off"
                className="mt-2"
                onChange={_handleChangeInput}
              />
              <FormText>Enter to add new value</FormText>
              <Input type="submit" className="d-none" />
            </Form>
          </div>
        </Form.Group>
      </Row>
      <div className="SectionInner FooterCreate">
        <div className="">
          <button>Tạo danh mục mới</button>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
