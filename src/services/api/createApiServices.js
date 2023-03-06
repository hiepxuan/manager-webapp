import axios from "axios"
import { getAccessToken } from "../AuthService"

const _makeRequest = (createRequest) => async (args) => {
  const _headers = args.headers ? args.headers : {}

  const defaultHeaders = {}

  args = {
    ...args,
    headers: {
      ...defaultHeaders,
      ..._headers,
    },
  }

  try {
    const { data } = await createRequest(args)

    return data
  } catch (e) {
    throw e
  }
}

const _makeAuthRequest = (createRequest) => async (args) => {
  const requestHeaders = args.headers ? args.headers : {}
  const accessToken = getAccessToken()

  let headers = {
    Authorization: `Bearer ${accessToken}`,
    "cache-control": "no-cache",
  }

  args = {
    ...args,
    headers: {
      ...headers,
      ...requestHeaders,
    },
  }

  return await _makeRequest(createRequest)(args)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (_options = {}) => {
  const baseUrlValidated = _options.baseUrl

  const configs = {
    baseURL: baseUrlValidated,
    timeout: 30000,
    validateStatus: function (status) {
      return status >= 200
    },
  }
  const instance = axios.create(configs)

  return {
    makeRequest: _makeRequest(instance),
    makeAuthRequest: _makeAuthRequest(instance),
  }
}