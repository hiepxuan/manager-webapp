import {
  faDeleteLeft,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const ProductPageBody = () => {
  return (
    <tbody>
      <tr key={`ProductMockupList`}>
        <td className="d-flex align-items-center ">
          <input type="checkbox" />
        </td>

        <td>
          <div className="d-flex">
            <div className="ImageProduct me-3">
              <img src="https://vaithuhayho.com/wp-content/uploads/2021/03/hinh-anh-dep-51.jpg" />
            </div>
            <p>những hình ảnh đẹp nhất trên thế giới</p>
          </div>
        </td>
        <td>aaa</td>
        <td>aaa</td>
        <td className="text-center d-flex justify-content-around">
          <div className="ActionIcon ActionIconDel">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
          <div className="ActionIcon ActionIconEdit">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
      </tr>{" "}
      <tr key={`ProductMockupList`}>
        <td className="d-flex align-items-center ">
          <input type="checkbox" />
        </td>

        <td>
          <div className="d-flex">
            <div className="ImageProduct me-3">
              <img src="https://vaithuhayho.com/wp-content/uploads/2021/03/hinh-anh-dep-51.jpg" />
            </div>
            <p>những hình ảnh đẹp nhất trên thế giới</p>
          </div>
        </td>
        <td>aaa</td>
        <td>aaa</td>
        <td className="text-center d-flex justify-content-around">
          <div className="ActionIcon ActionIconDel">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
          <div className="ActionIcon ActionIconEdit">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default ProductPageBody
