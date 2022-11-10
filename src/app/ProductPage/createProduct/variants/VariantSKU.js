import React, { useState } from "react";
import { Input } from "reactstrap";

const VariantSKU = (props) => {
  const [sku, setSku] = useState("");
  const _handleChangeInput = (e) => {
    // props.onChangeProduct(
    //   `variants[${props.variantIndex}].sku_seller`,
    //   e.target.value.trim()
    // );
    setSku(e.target.value.trim());
  };

  return (
    <td className="VariantSKU">
      <Input value={sku} onChange={_handleChangeInput} />
    </td>
  );
};

export default VariantSKU;
