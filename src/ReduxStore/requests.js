import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersData = createApi({
    reducerPath: 'apiOne',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => [
        {
            getUsers: builder.query({ query: () => 'todos' }),
        },
    ],
});

export const { useGetUsersQuery } = usersData;
