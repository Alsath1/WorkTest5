import { postSlice } from 'src/Redux/slice/postSlice';
import style from './Pagination.module.sass';
export const Pagination = () => {
	// 1 запрос
	const AllId = postSlice.useGetAllIdQuery({
		_action: 'get_ids',
		_params: {}
	});

	const numPag = Math.round(AllId?.data?.result.length / 50);
	const ArrLast = [];
	for (let i = 1; i <= numPag; i++) {
		ArrLast.push(i);
	}

	console.log(ArrLast);

	return (
		<div className={style.MainCont}>
			<div className={style.Pagination}>
				<div className={style.page}>{'<'}</div>
				{AllId?.data?.result !== undefined ? (
					AllId?.data?.result.map(el => {
						return <div className={style.page}>{el.num}</div>;
					})
				) : (
					<div className={style.page}>...</div>
				)}
				<div className={style.page}>{'>'}</div>
			</div>
		</div>
	);
};
