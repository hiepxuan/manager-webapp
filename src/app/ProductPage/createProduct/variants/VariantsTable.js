import PropTypes from "prop-types";
import React from "react";
import VariantRow from "./VariantRow";

const VariantsTable = (props) => {
  const { attributes, variants } = props;
  return (
    <div className="VariantsTable mt-3">
      <div className="table-responsive drag VariantsTableContent">
        <table className="table">
          <thead>
            <tr>
              <th className="col-1 Selector">#</th>
              <th className="col-1 Image">image</th>
              {attributes.map((attribute, index) => {
                return attribute.name && attribute.values.length > 0 ? (
                  <th
                    key={`variantTableHead_${index}`}
                    className="col-2 Attribute"
                  >
                    {attribute.name}
                  </th>
                ) : null;
              })}
              <th className="col-2 SKU">SKU</th>
              <th className="col-2 Weight">Weight (gram)</th>
              <th className="col-2 RetailPrice">Price (USD)</th>
              <th className="col-2 MarkDefault">Is default?</th>
            </tr>
          </thead>

          <tbody>
            {variants.map((variant, index) => (
              <VariantRow
                {...props}
                key={`variantTableRow_${index}`}
                variantIndex={index}
                variant={variant}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

VariantsTable.propTypes = {
  attributes: PropTypes.array.isRequired,
  variants: PropTypes.array.isRequired,
};

export default VariantsTable;