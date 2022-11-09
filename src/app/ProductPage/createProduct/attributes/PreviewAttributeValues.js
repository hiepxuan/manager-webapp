import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const PreviewAttributeValues = (props) => {
  const { attribute, onChangeAttribute } = props;
  useEffect(() => {
    console.log(attribute);
  }, [attribute]);
  return (
    <td className="PreviewAttributeValues">
      <ul className="PreviewAttribute">
        {attribute && !attribute.errors ? (
          attribute.values.map((item, index) => {
            return (
              <li key={index} className="col-auto mb-2">
                <span>
                  {attribute.type === "color"
                    ? item.name + "|" + item.value
                    : item.value}
                </span>
                <p>
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
