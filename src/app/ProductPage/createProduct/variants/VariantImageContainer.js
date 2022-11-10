import React, { Component, useState } from "react";
// import VariantImageModal from './VariantImageModal'
// import FeatureImage from '../../../../../../shared/FeatureImage'
import _ from "lodash";

const VariantImageContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const _toggleModal = () => {
    // this.setState(prevState => ({isOpen: !prevState.isOpen}))
  };

  return (
    <td className="VariantImage">
      <div
        className="d-inline-block cursor-pointer"
        onClick={() => _toggleModal()}
      >
        {/* <FeatureImage
          src={_.get(this.props.variant, "sides[0].thumb", "")}
          className="border"
        /> */}
        <img src="" />
      </div>

      {/* <VariantImageModal
        {...this.props}
        isOpen={this.state.isOpen}
        onToggle={this._toggleModal}
      /> */}
    </td>
  );
};

export default VariantImageContainer;
