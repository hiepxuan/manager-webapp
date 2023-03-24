import createAPIServices from "./createApiServices"

const baseUrl = "http://localhost:5005/product"

const api = createAPIServices({ baseUrl })

export const createProduct = (data) => {
  return api.makeRequest({
    url: "/create-product",
    method: "post",
    data: data,
  })
}

export const getProducts = (params) => {
  return api.makeRequest({
    url: `/get-products?${params}`,
    method: "get",
  })
}
