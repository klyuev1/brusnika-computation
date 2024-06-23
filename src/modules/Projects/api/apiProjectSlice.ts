import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project } from "../consts/IProject";
import { BASE_URL } from "../../../consts/base-url";

export const apiProjectSlice = createApi({
  reducerPath: "apiProject",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include"
  }),
  tagTypes: ["Project"],
  endpoints: builder => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({
        url: "/teplo/projects"
      }),
      providesTags: () => ["Project"]
    }),

    postProject: builder.mutation<Project, Partial<Project>>({
      query: project => ({
        url: "/teplo/projects",
        method: "POST",
        body: project
      }),
      invalidatesTags: ["Project"]
    }),

    updateProject: builder.mutation<Project, { projectID: string | null; project: Partial<Project> }>({
      query: ({ projectID, project }) => ({
        url: `/teplo/projects/${projectID}`,
        method: "PATCH",

        body: project
      }),
      invalidatesTags: ["Project"]
    }),

    deleteProject: builder.mutation<Project, Partial<Project>>({
      query: project => ({
        url: `/teplo/projects/${project.id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Project"]
    })
  })
});

export const { useGetProjectsQuery, usePostProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation } =
  apiProjectSlice;
