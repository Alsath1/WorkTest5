import style from './Pagination.module.sass';
import { useAppDispatch, useAppSelector } from 'src/Redux/hooks/redux';
import { GlobalState } from 'src/Redux/slice/GlobalState';
export const Pagination = () => {
	// получение данных RTK
	const { setPagePlus, setPageMinus } = GlobalState.actions;
	const dispatch = useAppDispatch();
	const { NumPage } = useAppSelector(state => state.GlobalState);

	return (
		<div className={style.MainCont}>
			<div className={style.Pagination}>
				<div
					className={style.page}
					onClick={() => {
						dispatch(setPageMinus());
					}}
				>
					{'<'}
				</div>
				<div className={style.page}>
					<h6>№{NumPage + 1}</h6>
				</div>
				<div
					className={style.page}
					onClick={() => {
						dispatch(setPagePlus());
					}}
				>
					{'>'}
				</div>
			</div>
		</div>
	);
};
