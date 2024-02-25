import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'md5';

const convertToMd5 = () => {
	const hash = md5('Valantis_20240225');
	return hash;
};

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
			'X-Auth': convertToMd5()
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
