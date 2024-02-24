import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QuryRequest {
	_action?: string;
	_params?: {};
}

export const postSlice = createApi({
	reducerPath: 'allPost',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://api.valantis.store:40000',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'X-Auth': '80b8a664896f96245af9c5df02e851c3'
		}
	}),
	endpoints: builder => ({
		getAllId: builder.query({
			query: ({ _action, _params }: QuryRequest) => ({
				url: '/',
				body: { action: _action, params: _params }
			})
		}),
		getAllElById: builder.query({
			query: ({ _action, _params }: QuryRequest) => ({
				url: '/',
				body: {
					action: _action,
					params: _params
				}
			})
		})
	})
});

export const { useGetAllIdQuery, useGetAllElByIdQuery, useLazyGetAllIdQuery } =
	postSlice;
