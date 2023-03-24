import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Form, FormText } from "react-bootstrap"
import { Input } from "reactstrap"

export const CreateProductRight = ({ tags, setTags }) => {
  const [data, setData] = useState()

  const _handleChangeInput = (e) => {
    setData(e.target.value)
  }
  const _handleSubmit = (e) => {
    e.preventDefault()
    setTags([...tags, data])
    setData("")
  }

  const handleDelete = (tag) => {
    const newTags = tags.filter((item) => item !== tag)
    setTags(newTags)
  }
  return (
    <>
      <div className="SectionInner ">
        <Form onSubmit={_handleSubmit}>
          <h1>Tags</h1>
          {tags.length > 0 && (
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
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon icon={faClose} />
                      </p>
                    </div>
                  )
                })}
            </div>
          )}
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
      <div className="SectionInner"></div>
    </>
  )
}
