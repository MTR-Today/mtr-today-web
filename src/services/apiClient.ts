import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'

export const apiClient = wretch('http://dev-api.mtr.today:3000/api/v1').addon(
  QueryStringAddon
)
