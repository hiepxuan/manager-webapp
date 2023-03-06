import createAPIServices from "./createApiServices"

const baseUrl = "http://localhost:5005/account"

const api = createAPIServices({ baseUrl })

export const getAccount = () => {
  return api.makeRequest({
    url: "/get-account",
    method: "get",
  })
}
