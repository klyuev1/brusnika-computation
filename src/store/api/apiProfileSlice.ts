import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../consts/base-url";

export interface Profile {
  name: string;
  email: string;
  password: string;
}
export interface ProfileView {
  name: string;
  email: string;
}

export interface ProfileViewWithRole {
  id: string;
  name: string;
  email: string;
  roles: Role[];
}

export interface Role {
  value: string;
  description: string;
}

export const apiProfileSlice = createApi({
  reducerPath: "apiProfile",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include"
  }),
  tagTypes: ["Profile"],
  endpoints: builder => ({
    getUser: builder.query<ProfileView, void>({
      query: () => ({
        url: "/users/me"
      }),
      providesTags: () => ["Profile"]
    }),
    signup: builder.mutation<Profile, Partial<Profile>>({
      query: profile => ({
        url: "/signup",
        method: "POST",
        body: profile
      }),
      invalidatesTags: ["Profile"]
    }),
    signin: builder.mutation<Profile, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: "/signin",
        method: "POST",
        body: { email, password }
      }),
      invalidatesTags: ["Profile"]
    }),
    signout: builder.mutation<void, void>({
      query: () => ({
        url: "/signout",
        method: "POST"
      }),
      invalidatesTags: ["Profile"]
    }),
    updateUser: builder.mutation<ProfileView, Partial<ProfileView>>({
      query: profile => ({
        url: "/users/me",
        method: "PATCH",
        body: profile
      }),
      invalidatesTags: ["Profile"]
    }),

    getAllUsers: builder.query<ProfileViewWithRole[], void>({
      query: () => ({
        url: "/users"
      }),
      providesTags: () => ["Profile"]
    }),

    changeRole: builder.mutation<ProfileViewWithRole, { userId: number; value: string }>({
      query: ({ userId, value }) => ({
        url: "/users/role",
        method: "POST",
        body: { userId, value }
      }),
      invalidatesTags: ["Profile"]
    }),

    deleteUser: builder.mutation<ProfileViewWithRole, Partial<ProfileViewWithRole>>({
      query: user => ({
        url: `/users/role/${user.id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Profile"]
    })
  })
});

export const {
  useGetUserQuery,
  useSignupMutation,
  useSigninMutation,
  useUpdateUserMutation,
  useSignoutMutation,
  useGetAllUsersQuery,
  useChangeRoleMutation,
  useDeleteUserMutation
} = apiProfileSlice;
