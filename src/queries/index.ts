import { GraphQLClient } from 'graphql-request'

export const apiClient = new GraphQLClient(
  `${import.meta.env.VITE_API_BASE_URL}/api/v1/graphql`
)
