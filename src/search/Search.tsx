import style from './Search.module.sass';

export const Search = () => {
	return (
		<div className={style.mainCont}>
			<h2>Сортировка: Сначала не дорогие </h2>
			<input type='text' placeholder='Введите название' />
		</div>
	);
};
