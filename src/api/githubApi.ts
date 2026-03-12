import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const githubApi = createApi({
  reducerPath: "githubApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),

  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => "users",
    }),

    getUser: builder.query<any, string>({
      query: (username) => `users/${username}`,
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
} = githubApi