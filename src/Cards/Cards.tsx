import {
	postSlice,
	useLazyFilteredQuery,
	useLazyGetAllElByIdQuery,
	useLazyGetAllIdQuery
} from 'src/Redux/slice/postSlice';
import style from './Cards.module.sass';
import { GlobalState } from 'src/Redux/slice/GlobalState';
import { useAppDispatch, useAppSelector } from 'src/Redux/hooks/redux';
import { useEffect, useState } from 'react';
export const Cards = () => {
	//RTK
	const { isLoading } = GlobalState.actions;
	const dispatch = useAppDispatch();
	const { Loading, NumPage, Input } = useAppSelector(
		state => state.GlobalState
	);

	//RTK Query запрос элементов по новому id пагинация

	const [Inpute, resultInput] = useLazyFilteredQuery();
	const [ElById, AllEl] = useLazyGetAllElByIdQuery();

	// RTK Query запрос id
	const AllId = postSlice.useGetAllIdQuery({
		_action: 'get_ids',
		_params: { offset: NumPage * 50, limit: 50 }
	});

	const [currentState, setCurrentState] = useState(false);

	// RTK Query запрос el

	useEffect(() => {
		ElById({
			_action: 'get_items',
			_params: {
				ids: currentState ? currentState : AllId?.data?.result
			}
		});
	}, [AllId, currentState, NumPage]);

	console.log(AllEl);

	useEffect(() => {
		if (Input.length > 0) {
			// какая то херня с запросом api выдаёт все элементы и игнорирует ограничнения 50 элементов
			Inpute({
				_action: 'filter',
				_params: { product: Input, offset: NumPage * 50, limit: 50 }
			});
			dispatch(isLoading(AllEl.isLoading));
			setCurrentState(resultInput?.data?.result);
		}
		if (Input.length == 0) {
			dispatch(isLoading(AllEl.isLoading));
			setCurrentState(AllId?.data?.result);
		}
	}, [Input, AllEl, NumPage]);

	useEffect(() => {
		dispatch(isLoading(AllEl.isLoading));
	}, [AllEl]);

	// const duplicates = result?.data?.result.filter((number, index, numbers) => {
	// 	return numbers.indexOf(number) !== index;
	// });
	// console.log(duplicates);

	return (
		<div className={style.mainCont}>
			{AllEl?.data?.result !== undefined ? (
				AllEl?.data?.result.map(el => {
					return (
						<div className={style.card} key={el.summ}>
							<div className={style.product}>{el.product}</div>
							<div className={style.brand}>
								{el.brand === null ? <>Без Бранда</> : el.brand}
							</div>
							<div className={style.id}>{el.id}</div>
							<div className={style.price}>{el.price} Руб.</div>
						</div>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
};
