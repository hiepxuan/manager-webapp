/* eslint-disable jsx-a11y/alt-text */
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TableLoading from "../../helpers/TableLoading"
import { formattedNumber } from "../../helpers/formatCurentcy"
import { useState } from "react"
import { ModalImagePwoduct } from "./ModalImagePwoduct"
const ProductPageBody = ({ products = [], loading }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {loading ? (
        <TableLoading columnQuantity={4} />
      ) : (
        <>
          {products.length &&
            products.map((item, key) => {
              return (
                <>
                  <tr key={key}>
                    <td className="d-flex align-items-center ">
                      <input type="checkbox" />
                    </td>

                    <td>
                      <div className="d-flex">
                        <div className="ImageProduct me-3">
                          <img
                            onClick={() => setShow(true)}
                            src={
                              process.env.REACT_APP_BASE_URL +
                              "/upload/" +
                              item.images[0]
                            }
                          />
                        </div>
                        <p>{item.title}</p>
                      </div>
                    </td>
                    <td>
                      {item.retail_price && formattedNumber(item.retail_price)}
                    </td>
                    <td>{item.category.name}</td>
                    <td className="text-center d-flex justify-content-center gap-3">
                      <div className="ActionIcon ActionIconDel">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                      <div className="ActionIcon ActionIconEdit">
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </td>
                  </tr>
                  <ModalImagePwoduct
                    show={show}
                    images={item.images}
                    setShow={setShow}
                    products={products}
                  />
                </>
              )
            })}
        </>
      )}
    </>
  )
}

export default ProductPageBody
