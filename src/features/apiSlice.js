import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiProductSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
  }),
})
export const { useGetProductsQuery } = apiSlice

/** 
 * api news
 * api_token=me7VCefdLfNRkYBP42ksGJlRjXSIE0r2t1va7TB3
 * 
 * all news
 * https://api.thenewsapi.com/v1/news/all?
 * 
 * parameter : api_token, search, categories, exclude_categories, domains, exclude_domains
 * source_ids, exclude_source_ids, language, published_before, published_after, published_on
 * sort, limit, page
 * 
 * topstories
 * https://api.thenewsapi.com/v1/news/top?
 * 
 * parameter : api_token, search, locale, categories, exclude_categories, domains, exclude_domains
 * source_ids, exclude_source_ids, language, published_before, published_after, published_on
 * sort, limit, page
 * 
 *  */ 