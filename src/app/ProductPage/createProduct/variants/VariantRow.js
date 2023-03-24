import React, { Component } from "react"
import { Technique } from "./Technique"
import VariantFromAttributes from "./VariantFromAttributes"
import VariantImageContainer from "./VariantImageContainer"
import VariantRetailPrice from "./VariantRetailPrice"
import VariantSKU from "./VariantSKU"
import VariantSelector from "./VariantSelector"

class VariantRow extends Component {
  render() {
    return (
      <tr className="VariantRow">
        <VariantSelector {...this.props} />
        <VariantImageContainer {...this.props} />
        <VariantFromAttributes {...this.props} />
        <VariantSKU {...this.props} />
        <VariantRetailPrice {...this.props} />
        <Technique {...this.props} />
      </tr>
    )
  }
}

export default VariantRow
