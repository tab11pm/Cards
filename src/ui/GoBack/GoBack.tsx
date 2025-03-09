import { NavigateFunction } from 'react-router-dom';

const GoBack = ({ navigate }: { navigate: NavigateFunction }) => {
	return (
		<div>
			<button className="goback" onClick={(e) => navigate('/')}>
				Back
			</button>
		</div>
	);
};

export default GoBack;
