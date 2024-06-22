import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRoom } from "../consts/IRoom";
import { BASE_URL } from "../../../consts/base-url";

export const apiRoomSlice = createApi({
  reducerPath: "apiRoom",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include"
  }),
  tagTypes: ["Room"],
  endpoints: builder => ({
    getRooms: builder.query<IRoom[], { projectID: string }>({
      query: ({ projectID }) => ({
        url: `/teplo/projects/${projectID}/rooms`
      }),
      providesTags: () => ["Room"]
    }),

    postRoom: builder.mutation<IRoom, { projectID: string; facadeIDs: string[]; room: Partial<IRoom> }>({
      query: ({ projectID, facadeIDs, room }) => ({
        url: `/teplo/projects/${projectID}/rooms`,
        method: "POST",
        body: {
          ...room,
          facadeIds: facadeIDs
        }
      }),
      invalidatesTags: ["Room"]
    }),

    deleteRoom: builder.mutation<IRoom, { projectID: string; room: Partial<IRoom> }>({
      query: ({ projectID, room }) => ({
        url: `/teplo/projects/${projectID}/rooms/${room.id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Room"]
    }),

    duplicateFloor: builder.mutation<IRoom, { projectID: string; selectedFloor: number; createdFloor: number }>({
      query: ({ projectID, selectedFloor, createdFloor }) => ({
        url: `/teplo/projects/${projectID}/rooms/duplicateFloor`,
        method: "POST",
        body: {
          selectedFloor,
          createdFloor
        }
      }),
      invalidatesTags: ["Room"]
    })

    // downloadRooms: builder.query<Room[], {projectID: string}>({
    //   query: ({projectID}) => ({
    //     url: `/projects/${projectID}/rooms/download`
    //   }),
    //   providesTags: result => ['Room'],
    // }),
  })
});

export const { useGetRoomsQuery, usePostRoomMutation, useDeleteRoomMutation, useDuplicateFloorMutation } = apiRoomSlice;
