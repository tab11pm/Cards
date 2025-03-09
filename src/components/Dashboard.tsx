import { useEffect, useState } from 'react';
import { errorCatch } from '../api/error';
import { axiosClassic } from '../api/interceptors';
import Card from '../ui/Card/Card';
import '../ui/Table.scss';
import { ICard } from '../types/card';
import { ISite } from '../types/site';
import Search from '../ui/Search/Search';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const [cards, setCards] = useState<ICard[]>([]);
	const [filteredCards, setFilteredCards] = useState<ICard[]>([]);
	const [sites, setSites] = useState<ISite[]>([]);
	const [query, setQuery] = useState<string>('');
	const getData = async (
		type: string,
		setData: (data: ICard[] | ISite[]) => void
	) => {
		try {
			const res = await axiosClassic.get(`/${type}`);
			console.log(res.data);
			setData(res.data);
		} catch (error) {
			console.error(errorCatch(error));
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
		</div>
	);
};

export default Dashboard;
