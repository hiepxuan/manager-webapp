import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const AccountBody = () => {
  return (
    <tbody>
      <tr className="">
        <td>
          <input type="checkbox" name="" id="" />
        </td>
        <td>hiepxuan</td>
        <td>hiepxuan2006@gmail.com</td>
        <td>
          <div className="d-flex gap-3 align-items-center justify-content-around">
            <p>Admin</p>
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
        <td>
          <div className="h-100 d-flex justify-content-center gap-3 align-items-center">
            <FontAwesomeIcon className="text-warning" icon={faTrash} />
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
      </tr>
      <tr className="mt-3">
        <td>
          <input type="checkbox" name="" id="" />
        </td>
        <td>hiepxuan</td>
        <td>hiepxuan2006@gmail.com</td>
        <td>
          <div className="d-flex gap-3 align-items-center justify-content-around">
            <p>Admin</p>
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
        <td>
          <div className="h-100 d-flex justify-content-center gap-3 align-items-center">
            <FontAwesomeIcon icon={faTrash} />
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
      </tr>
    </tbody>
  )
}
