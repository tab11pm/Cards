import ReactDOM from 'react-dom';
import './Loader.scss';

const Loader = ({ isLoading }: { isLoading: boolean }) => {
	const loaderRoot = document.getElementById('loader-root');
	if (!loaderRoot) {
		return null;
	}

	if (!isLoading) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className="loader-overlay">
			<div className="loader" />
		</div>,
		loaderRoot
	);
};

export default Loader;
