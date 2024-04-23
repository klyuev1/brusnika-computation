import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Facade } from "../consts/IFacade"
import { BASE_URL } from "../../../consts/base-url";

export const apiFacadeSlice = createApi({
  reducerPath: 'apiFacade',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Facade'],
  endpoints: builder => ({

    getFacades: builder.query<Facade[], void>({
      query: () => ({
        url: '/teplo/facades'
      }),
      providesTags: () => ['Facade'],
    }),

    postFacade: builder.mutation<Facade, { facade: Partial<Facade>, image: File }>({
      query: ({ facade, image }) => {
        const formData = new FormData();
        formData.append('name', facade.name|| '');
        formData.append('height', (facade.height || 0).toString());
        formData.append('width', (facade.width || 0).toString());
        formData.append('areaWindow', (facade.areaWindow || 0).toString());
        formData.append('areaWall', (facade.areaWall || 0).toString());
        formData.append('image', image);
        return {
          url: '/teplo/facades',
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['Facade'],
    }),

    deleteFacade: builder.mutation<Facade, Partial<Facade>>({
      query: (facade) => ({
        url: `/teplo/facades/${facade.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Facade'],
    }),

  })
})

export const { useGetFacadesQuery, usePostFacadeMutation, useDeleteFacadeMutation } = apiFacadeSlice;