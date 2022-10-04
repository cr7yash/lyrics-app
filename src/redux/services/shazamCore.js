/* eslint-disable quotes */
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "550a90b46emsh39285f40f7f483dp1f632fjsnbe07916fffbd"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => "/charts/world"}),
  }),
});

export const {useGetTopChartsQuery} = shazamCoreApi;
