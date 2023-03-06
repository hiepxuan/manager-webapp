import createAPIServices from "./createApiServices"

const baseUrl = "http://localhost:5005/category"

const api = createAPIServices({ baseUrl })

export const getCategories = () => {
  return api.makeRequest({
    url: "/get-category",
    method: "get",
  })
}

export const createCategory = (name, parentId) => {
  return api.makeRequest({
    url: "create-category",
    method: "post",
    data: {
      name: name,
      parentId,
    },
  })
}
