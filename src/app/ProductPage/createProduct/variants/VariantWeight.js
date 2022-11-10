import React, { Component, useState } from "react";
import { NumericFormat } from "react-number-format";
// import {checkStoreIsMP} from '../../../../../../helpers/mpModeHelper'

//import PropTypes from 'prop-types'

const VariantWeight = (props) => {
  const [weight, setWeight] = useState(0);
  const _handleChangeInput = ({ floatValue }) => {
    // this.props.onChangeProduct(
    //   `variants[${this.props.variantIndex}].weight`,
    //   floatValue
    // );
    console.log("=++++++++++++++++++++++++++", floatValue);
  };

  // render() {
  //     const {store} = this.props
  //     const isModeMp = checkStoreIsMP(store)
  //     const currency = store.getSetting('currency', isModeMp ? 'VND' : 'USD')

  return (
    <td className="VariantWeight">
      <NumericFormat
        className="form-control"
        value={props.variant.weight ?? ""}
        onValueChange={_handleChangeInput}
        // thousandSeparator={currency === 'VND' ? '.' : ','}
        // decimalSeparator={currency === 'VND' ? ',' : '.'}
        // decimalScale={currency === 'VND' ? 0 : 2}
      />
    </td>
  );
};

//VariantWeight.defaultProps = {}

//VariantWeight.propTypes = {}

export default VariantWeight;
