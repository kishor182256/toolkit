import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const apiHeaders={
    'X-RapidAPI-Key': '4f98e83a24msh55cf6358c6293bbp152772jsn53a1f7f1503e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }


  const baseUrl = 'https://coinranking1.p.rapidapi.com';

  const createRequest = (url) => ({url,headers:apiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins`),
        })
    })
})


  export const {useGetCryptosQuery} = cryptoApi;