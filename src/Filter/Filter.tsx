import style from './Filter.module.sass';

export const Filter = () => {
	return (
		<div className={style.mainCont}>
			<div className={style.filter}>
				<div className={style.inputCont}>
					<input
						className={style.from}
						type='number'
						placeholder='Введите цену'
					/>
				</div>
				<input
					className={style.brand}
					type='text'
					placeholder='Введите название Брэнда'
				/>
			</div>
		</div>
	);
};
