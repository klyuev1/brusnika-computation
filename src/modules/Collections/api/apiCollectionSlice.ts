import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Collection } from '../consts/ICollection';
import { BASE_URL } from "../../../consts/base-url";

export const apiCollectionSlice = createApi({
  reducerPath: 'apiCollection',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Collection'],
  endpoints: builder => ({
    
    getCollections: builder.query<Collection[], void>({
      query: () => ({
        url: '/landscaping/collections'
      }),
      providesTags: () => ['Collection'],
    }),
    
    postCollection: builder.mutation<Collection, Partial<Collection>>({
      query: (collection) => ({
        url: '/landscaping/collections',
        method: 'POST',
        body: collection,
      }),
      invalidatesTags: ['Collection'],
    }),
    
    updateCollection: builder.mutation<Collection, { collectionID: string | null; collection: Partial<Collection> }>({
      query: ({collectionID, collection}) => ({
        url: `/landscaping/collections/${collectionID}`,
        method: 'PATCH',

        body: collection,
      }),
      invalidatesTags: ['Collection'],
    }),
    
    deleteCollection: builder.mutation<Collection, Partial<Collection>>({
      query: (collection) => ({
        url: `/landscaping/collections/${collection.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Collection'],
    }),

  })
});

export const {useGetCollectionsQuery, usePostCollectionMutation, useUpdateCollectionMutation, useDeleteCollectionMutation} = apiCollectionSlice;