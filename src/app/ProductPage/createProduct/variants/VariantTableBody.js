import {
  faClose,
  faDeleteLeft,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const VariantTableBody = () => {
  return (
    <tr>
      <td className="">
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td className="text-center">
        <input type="radio" />
      </td>
    </tr>
  );
};

export default VariantTableBody;
