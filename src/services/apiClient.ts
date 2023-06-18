import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'

export const apiClient = wretch(
  `${import.meta.env.VITE_API_BASE_URL}/api/v1`
).addon(QueryStringAddon)
