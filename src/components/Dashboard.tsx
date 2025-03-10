import { Suspense, useEffect, useState } from 'react';
import { errorCatch } from '../api/error';
import { axiosClassic } from '../api/interceptors';
import Card from '../ui/Card/Card';
import '../ui/Table.scss';
import { ICard } from '../types/card';
import { ISite } from '../types/site';
import Search from '../ui/Search/Search';
import { useNavigate } from 'react-router-dom';
import Loader from '../ui/Loader/Loader';
import Error from '../ui/Error/Error';

const Dashboard = () => {
	const navigate = useNavigate();
	const [cards, setCards] = useState<ICard[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [filteredCards, setFilteredCards] = useState<ICard[]>([]);
	const [sites, setSites] = useState<ISite[]>([]);
	const [query, setQuery] = useState<string>('');
	const getData = async (
		type: string,
		setData: (data: ICard[] | ISite[]) => void
	) => {
		setIsLoading(true);
		try {
			const res = await axiosClassic.get(`/${type}`);
			console.log(res.data);
			setData(res.data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			const err = errorCatch(error);
			console.error(err);
			setError(err);
		}
	};

	useEffect(() => {
		getData('tests', setCards);
		getData('sites', setSites);
	}, []);

	useEffect(() => {
		query !== ''
			? setFilteredCards(
					cards.filter((card) =>
						card.name.toLowerCase().includes(query.toLowerCase())
					)
			  )
			: setFilteredCards(cards);
	}, [query, cards]);

	return (
		<div className="wrapper">
			<Loader isLoading={isLoading} />
			<h2>Dashboard</h2>

			<Search query={query} setQuery={setQuery} cards={filteredCards} />

			<table className="customers-table">
				<thead>
					<tr>
						<th>name</th>
						<th>type</th>
						<th>status</th>
						<th>site</th>
					</tr>
				</thead>
				<tbody>
					{filteredCards.length > 0 &&
						filteredCards.map((card) => (
							<Card
								key={card.name}
								card={card}
								sites={sites}
								navigate={navigate}
							/>
						))}
				</tbody>
			</table>

			{filteredCards.length <= 0 && (
				<div className="flex flex-center flex-col gap-4 ">
					<h3>Your search did not match any results.</h3>
					<button onClick={() => setQuery('')} className="reset">
						Reset
					</button>
				</div>
			)}
			<Error Error={error} />
		</div>
	);
};

export default Dashboard;
