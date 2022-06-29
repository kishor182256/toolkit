import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const newsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4f98e83a24msh55cf6358c6293bbp152772jsn53a1f7f1503e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }



  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({url,headers:newsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;