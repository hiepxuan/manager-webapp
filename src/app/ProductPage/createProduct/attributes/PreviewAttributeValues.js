import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const PreviewAttributeValues = (props) => {
  const { attribute, onChangeAttribute, attributes, setAttributes, attIndex } =
    props;

  const handleDelete = (itemRemove) => {
    const valuesFiltered = attribute.values.filter(
      (attValue) => attValue !== itemRemove
    );
    if (valuesFiltered.length === 0) {
      // Remove attribute if there are no values
      const newAttributes = attributes.filter(
        (att, index) => index !== attIndex
      );
      setAttributes(newAttributes);
    } else {
      // let hasDefaultVariant = false;

      // const variantFiltered = variants.filter((variant) => {
      //   const isValid = variant.options[attIndex].value !== removeValue;
      //   if (isValid && variant.is_default) hasDefaultVariant = true;
      //   return isValid;
      // });

      // if (!hasDefaultVariant && variantFiltered.length > 0)
      //   variantFiltered[0].is_default = true;

      onChangeAttribute("values", attribute.position, valuesFiltered);
    }
  };
  return (
      <td className="PreviewAttributeValues">
        <ul className="PreviewAttribute">
          {(attribute && !attribute.errors) ||
          (attribute && attribute.values.length) ? (
            attribute.values.map((item, index) => {
              return (
                <li key={index} className="col-auto mb-2">
                  <span>
                    {attribute.type === "color"
                      ? item.name + "|" + item.value
                      : item.value}
                  </span>
                  <p onClick={() => handleDelete(item)}>
                    <FontAwesomeIcon icon={faClose} />
                  </p>
                </li>
              );
            })
          ) : (
            <p className="text-danger">{attribute.errors.value}</p>
          )}
        </ul>
      </td>
    );
};

export default PreviewAttributeValues;
