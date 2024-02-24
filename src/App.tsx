import style from './App.module.sass';
import { Cards } from './Cards/Cards';
import { Filter } from './Filter/Filter';
import { Pagination } from './Pagination/Pagination';
import { Search } from './search/Search';

function App() {
	return (
		<div className={style.MainCont}>
			<Filter />
			<div className={style.searchCont}>
				<Search />
				<Cards />
				<Pagination />
			</div>
		</div>
	);
}

export default App;
