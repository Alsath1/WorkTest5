import style from './Cards.module.sass';

const TestArr = [
	{ summ: 1223 },
	{ summ: 1133 },
	{ summ: 11233 },
	{ summ: 5653 },
	{ summ: 8234 },
	{ summ: 45678 },
	{ summ: 8153 },
	{ summ: 4431 },
	{ summ: 1223 },
	{ summ: 5234 },
	{ summ: 6234 },
	{ summ: 1223 },
	{ summ: 1133 },
	{ summ: 11233 },
	{ summ: 5653 },
	{ summ: 8234 },
	{ summ: 45678 },
	{ summ: 8153 },
	{ summ: 4431 },
	{ summ: 1223 },
	{ summ: 5234 },
	{ summ: 6234 },
	{ summ: 1223 },
	{ summ: 1133 },
	{ summ: 11233 },
	{ summ: 5653 },
	{ summ: 8234 },
	{ summ: 45678 },
	{ summ: 8153 },
	{ summ: 4431 },
	{ summ: 1223 },
	{ summ: 5234 },
	{ summ: 5653 },
	{ summ: 8234 },
	{ summ: 45678 },
	{ summ: 8153 },
	{ summ: 4431 },
	{ summ: 1223 },
	{ summ: 5234 },
	{ summ: 6234 },
	{ summ: 1223 },
	{ summ: 1133 },
	{ summ: 11233 },
	{ summ: 5653 },
	{ summ: 8234 },
	{ summ: 45678 },
	{ summ: 8153 },
	{ summ: 4431 },
	{ summ: 1223 },
	{ summ: 5234 },
	{ summ: 6234 },
	{ summ: 1223 },
	{ summ: 1133 },
	{ summ: 11233 },
	{ summ: 5653 },
	{ summ: 8234 },
	{ summ: 45678 },
	{ summ: 8153 },
	{ summ: 4431 },
	{ summ: 1223 },
	{ summ: 5234 },
	{ summ: 6234 },
	{ summ: 2351 }
];

export const Cards = () => {
	return (
		<div className={style.mainCont}>
			{TestArr.map(el => {
				return (
					<div className={style.card} key={el.summ}>
						<h2>Чеснок забористый</h2>
						<h3>Gachi</h3>
						<h4>1789ecf3-f81c-4f49-ada2-83804dcc74b0</h4>
						<h2 className={style.summ}>{el.summ}.00 Руб.</h2>
					</div>
				);
			})}
		</div>
	);
};
