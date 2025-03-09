import { useNavigate } from 'react-router-dom';
import GoBack from '../ui/GoBack/GoBack';
import './Results.scss';

const Results = () => {
	const navigate = useNavigate();

	return (
		<div className="results">
			<h2>Results</h2>

			<p className="results__text">Order basket redesing</p>

			<GoBack navigate={navigate} />
		</div>
	);
};

export default Results;
