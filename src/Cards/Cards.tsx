import { postSlice } from 'src/Redux/slice/postSlice';
import style from './Cards.module.sass';

export const Cards = () => {
	// 1 запрос
	const AllId = postSlice.useGetAllIdQuery({
		_action: 'get_ids',
		_params: { offset: 0, limit: 50 }
	});

	// 2 запрос
	const ElById = postSlice.useGetAllElByIdQuery({
		_action: 'get_items',
		_params: {
			ids: AllId?.data?.result
		}
	});

	const duplicates = AllId?.data?.result.filter((number, index, numbers) => {
		return numbers.indexOf(number) !== index;
	});
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
				<div className={style.card}>Loading</div>
			)}
		</div>
	);
};
