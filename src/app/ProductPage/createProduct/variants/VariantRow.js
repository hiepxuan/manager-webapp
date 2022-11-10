import React, { Component } from "react";
import VariantImageContainer from "./VariantImageContainer";
import VariantSelector from "./VariantSelector";
import VariantSKU from "./VariantSKU";
import VariantFromAttributes from "./VariantFromAttributes";
import VariantWeight from "./VariantWeight";

class VariantRow extends Component {
  render() {
    return (
      <tr className="VariantRow">
        <VariantSelector {...this.props} />
        <VariantImageContainer {...this.props} />
        <VariantFromAttributes {...this.props} />
        <VariantSKU {...this.props} />
        <VariantWeight {...this.props} />
        {/* <VariantRetailPrice {...this.props} /> */}
        {/* <VariantDefault {...this.props} /> */}
      </tr>
    );
  }
}

export default VariantRow;
