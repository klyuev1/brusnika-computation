import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Room } from '../consts/IRoom';
import { BASE_URL } from "../../../consts/base-url";

export const apiRoomSlice = createApi({
  reducerPath: 'apiRoom',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Room'],
  endpoints: builder => ({
    
    getRooms: builder.query<Room[], {projectID: string}>({
      query: ({projectID}) => ({
        url: `/teplo/projects/${projectID}/rooms`
      }),
      providesTags: () => ['Room'],
    }),

    postRoom: builder.mutation<Room, { projectID: string; room: Partial<Room> }>({
      query: ({ projectID, room }) => ({
        url: `/teplo/projects/${projectID}/rooms`,
        method: 'POST',
        body: room,
      }),
      invalidatesTags: ['Room'],
    }),

    deleteRoom: builder.mutation<Room, { projectID: string; room: Partial<Room> }>({
      query: ({ projectID, room }) => ({
        url: `/teplo/projects/${projectID}/rooms/${room.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Room'],
    }),
    
    // downloadRooms: builder.query<Room[], {projectID: string}>({
    //   query: ({projectID}) => ({
    //     url: `/projects/${projectID}/rooms/download`
    //   }),
    //   providesTags: result => ['Room'],
    // }),


  })
});

export const { useGetRoomsQuery, usePostRoomMutation, useDeleteRoomMutation } = apiRoomSlice;