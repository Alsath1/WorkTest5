import style from './Pagination.module.sass';

export const Pagination = () => {
	const ArrTest = [
		{ num: 1 },
		{ num: 2 },
		{ num: 3 },
		{ num: 4 },
		{ num: 5 },
		{ num: 6 },
		{ num: 7 },
		{ num: 8 }
	];

	return (
		<div className={style.MainCont}>
			<div className={style.Pagination}>
				<div className={style.page}>{'<'}</div>
				{ArrTest.map(el => {
					return <div className={style.page}>{el.num}</div>;
				})}
				<div className={style.page}>{'>'}</div>
			</div>
		</div>
	);
};
