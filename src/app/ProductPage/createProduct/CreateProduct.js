import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import generateVariants from "../../../helpers/generateVariants";
import ProductAttributesList from "./attributes/ProductAttributesList";
import VariantsTable from "./variants/VariantsTable";
const CreateProduct = () => {
  const [attributes, setAttributes] = useState([]);
  const [variants, setVariants] = useState([]);
  const editorRef = useRef(null);

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
      ]);
    }
    let attribute = attributes[attributes.length - 1];
    const errors = {};
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
      ]);
    } else {
      if (!attribute.values.length) {
        errors.value = "At least one value required";
      }
      if (!attribute.name) {
        errors.name = "can not found";
      }
      attribute = Object.assign({}, attribute, { errors });
      const newAttributes = attributes.splice(0, attributes.length - 1);
      setAttributes([...newAttributes, attribute]);
    }
  };
  const onChangeAttribute = (key, vKey, value, hasVariants = false) => {
    const newAttribute =
      attributes &&
      attributes.map((item) => {
        if (item["position"] === vKey) {
          item[key] = value;
        }
        return item;
      });
    if (hasVariants) {
      const variants = generateVariants(attributes);
      setVariants(variants);
    }
    setAttributes(newAttribute);
  };
  useEffect(() => {
    const variants = generateVariants(attributes);
    setVariants(variants);
  }, [attributes]);
  console.log(variants);
  return (
    <div className="CreateProductPage">
      <h1>Create Product</h1>
      <div className="SectionInner">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>T??n s???n ph???m</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">
                Vui l??ng nh???p !
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Gi?? s???n ph???m</Form.Label>

              <Form.Control type="text" name="price" required />
              <Form.Control.Feedback type="invalid">
                Vui l??ng nh???p gi??
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" className="mt-4">
              <Form.Label>Danh m???c s???n ph???m</Form.Label>
              <select
                defaultValue={"DEFAULT"}
                name="category_id"
                className="custom-select ms-5 px-4"
                id="validationCustom03"
                // onChange={handleChange}
                required
              >
                <option selected value="DEFAULT">
                  Ch???n danh m???c
                </option>
                <option value="a">Ch???n danh m???c</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Vui l??ng ch???n danh m???c
            </Form.Control.Feedback>
          </Row>
          <Row>
            <Form.Group md="12" as={Col} controlId="validationCustom05">
              <Form.Label>M?? t??? s???n ph???m</Form.Label>

              {/* <CKEditor
                id="validationCustom05"
                required
                editor={ClassicEditor}
                config={{
                  ckfinder: {
                    uploadUrl: `upload`,
                  },
                }}
              />
              <div className="invalid-feedback">Please select a valid state.</div> */}
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
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control
                required
                name="name"
                type="file"
                multiple
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">
                Vui l??ng nh???p !
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div className="SectionInner">
        <h1>Attributes</h1>
        <p>Add the attributes like size or color of your product here.</p>
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
            Add new attribute
          </Button>
        </div>
      </div>
      <div className="SectionInner">
        <h1>Variants</h1>
        <p>Manage the variations of this product below..</p>
        <div className="VariantsTableContainer">
          <VariantsTable attributes={attributes} variants={variants} />
        </div>
      </div>
      <div className="SectionInner FooterCreate">
        <div className="">
          <button>Create product</button>
        </div>
      </div>
    </div>
  );
};;

export default CreateProduct;
