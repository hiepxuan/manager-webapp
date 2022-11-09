import {
  faClose,
  faDeleteLeft,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AttributesTableBody = () => {
  return (
    <tr>
      <td className="">
        <input type="text" />
      </td>

      <td>
        <select className="px-5">
          <option>Color</option>
          <option>Size</option>
        </select>
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <div className="PreviewProp border mt-2">
          <p>black</p>
          <FontAwesomeIcon icon={faClose} className="CancelItem" />
        </div>
      </td>
      <td className="text-center d-flex justify-content-around"></td>
    </tr>
  );
};

export default AttributesTableBody;
