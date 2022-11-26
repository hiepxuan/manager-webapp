import classNames from "classnames";
import React from "react";
import { NumericFormat } from "react-number-format";

//import PropTypes from 'prop-types'

const VariantRetailPrice = (props) => {
  const _handleChangeInput = ({ floatValue }) => {};

  return (
    <td className="VariantRetailPrice">
      <div className="position-relative">
        <NumericFormat
          value={props.variant.retail_price ?? ""}
          className={classNames("form-control")}
        />
      </div>
    </td>
  );
};

export default VariantRetailPrice;
