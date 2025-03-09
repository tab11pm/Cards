import { useNavigate } from 'react-router-dom';
import GoBack from '../ui/GoBack/GoBack';
import './Finalize.scss';

const Finalize = () => {
	const navigate = useNavigate();
	return (
		<div className="finalize">
			<h2>Finalize</h2>

			{/* <p className="finalize__text">Order basket redesing</p> */}
			<p className="finalize__text">Spring promotion</p>

			<GoBack navigate={navigate} />
		</div>
	);
};

export default Finalize;
