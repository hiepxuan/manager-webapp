import React, { Component } from "react";
import { Input } from "reactstrap";

//import PropTypes from 'prop-types'

const InputAttributeType = (props) => {
  const { onChangeAttribute, attribute } = props;

  const _handleChangeSelect = (e) => {
    const { value } = e.target;
    onChangeAttribute("type", attribute.position, value);
  };

  //   const type = (this.props.attribute.type || "").toLocaleLowerCase();
  return (
    <td className="InputAttributeType">
      <Input
        // disabled={true}
        // value={type}
        type="select"
        onChange={_handleChangeSelect}
      >
        <option selected defaultValue={"DEFAULT"} disabled>
          Chose
        </option>
        <option value="color">Color</option>
        <option value="size">Size</option>
      </Input>
    </td>
  );
};

//InputAttributeType.defaultProps = {}

//InputAttributeType.propTypes = {}

export default InputAttributeType;
