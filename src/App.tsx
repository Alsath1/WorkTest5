import style from './App.module.sass';
import { Cards } from './Cards/Cards';
import { Filter } from './Filter/Filter';
import { Pagination } from './Pagination/Pagination';
import { useAppSelector } from './Redux/hooks/redux';
import { Search } from './search/Search';

function App() {
	const { Loading } = useAppSelector(state => state.GlobalState);
	return (
		<div className={style.MainCont}>
			<Filter />
			<div className={style.searchCont}>
				<Search />
				{Loading ? <h2>Loading...</h2> : <></>}
				<Cards />
				<Pagination />
			</div>
		</div>
	);
}

export default App;
