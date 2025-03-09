import seachIcon from '@assets/search.svg';
import './Search.scss';
import { ICard } from '../../types/card';
import { useEffect, useRef } from 'react';
const Search = ({
	query,
	setQuery,
	cards,
}: {
	query: string;
	setQuery: (data: string) => void;
	cards: ICard[];
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
				event.preventDefault(); // Предотвращаем стандартное поведение браузера
				inputRef.current?.focus();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	return (
		<label className="search" htmlFor="search">
			<div className="flex items-center gap-8">
				<img src={seachIcon} alt="" />
				<input
					type="text"
					id="search"
					ref={inputRef}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="What test are you looking for?"
					className="search__input"
				/>
			</div>
			<span className="search__count">{cards?.length || 0} Tests</span>
		</label>
	);
};

export default Search;
