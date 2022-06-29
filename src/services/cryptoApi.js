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
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          })
    })
})


  export const {useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi;