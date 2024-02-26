import { useAppDispatch, useAppSelector } from 'src/Redux/hooks/redux';
import style from './Search.module.sass';
import { GlobalState } from 'src/Redux/slice/GlobalState';

export const Search = () => {
	//RTK
	const { inputValue } = GlobalState.actions;
	const dispatch = useAppDispatch();

	return (
		<div className={style.mainCont}>
			<h2>Сортировка: Сначала не дорогие </h2>
			<input
				onChange={e => {
					dispatch(inputValue(e.currentTarget.value));
				}}
				type='text'
				placeholder='Введите название'
			/>
		</div>
	);
};
