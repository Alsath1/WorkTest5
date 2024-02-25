import { postSlice, useLazyGetAllIdQuery } from 'src/Redux/slice/postSlice';
import style from './Cards.module.sass';
import { GlobalState } from 'src/Redux/slice/GlobalState';
import { useAppDispatch, useAppSelector } from 'src/Redux/hooks/redux';
import { useEffect } from 'react';
export const Cards = () => {
	//RTK
	const { isLoading } = GlobalState.actions;
	const dispatch = useAppDispatch();
	const { Loading, NumPage } = useAppSelector(state => state.GlobalState);

	//RTK Query запрос id
	// postSlice.useGetAllIdQuery({
	// 	_action: 'get_ids',
	// 	_params: { offset: 0, limit: 50 }
	// });

	//RTK Query запрос элементов по новому id пагинация
	const [fetchId, result] = useLazyGetAllIdQuery();

	useEffect(() => {
		fetchId({
			_action: 'get_ids',
			_params: { offset: NumPage * 50, limit: 50 }
		});
	}, [NumPage]);

	//RTK Query запрос элементов по id

	const ElById = postSlice.useGetAllElByIdQuery({
		_action: 'get_items',
		_params: {
			ids: result?.data?.result
		}
	});

	useEffect(() => {
		dispatch(isLoading(ElById.isFetching));
	}, [ElById.isFetching]);

	// const duplicates = result?.data?.result.filter((number, index, numbers) => {
	// 	return numbers.indexOf(number) !== index;
	// });
	// console.log(duplicates);

	return (
		<div className={style.mainCont}>
			{ElById?.data?.result !== undefined ? (
				ElById?.data?.result.map(el => {
					return (
						<div className={style.card} key={el.summ}>
							<div className={style.product}>{el.product}</div>
							<div className={style.brand}>{el.brand}</div>
							<div className={style.id}>{el.id}</div>
							<div className={style.price}>{el.price}</div>
						</div>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
};
