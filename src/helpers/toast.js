import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function Notify(props) {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default Notify
