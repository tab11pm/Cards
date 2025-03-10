import ReactDOM from 'react-dom';
import './Error.scss';
import { useEffect, useState } from 'react';

const Error = ({ Error }: { Error: string | null }) => {
	const errorRoot = document.getElementById('error-root');
	if (!errorRoot) {
		return null;
	}

	const [showError, setShowError] = useState(true);

	useEffect(() => {
		const closeOnEscapeKey = (e) =>
			e.key === 'Escape' ? setShowError(false) : null;
		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [showError]);

	return !showError || !Error
		? null
		: ReactDOM.createPortal(
				<div className="error-overlay">
					<div className="error-content">
						<button
							className="error-close"
							onClick={(e: EventTarget) => setShowError(false)}
						>
							✖
						</button>
						<h1 style={{ color: 'red' }}>Error</h1>
						<span className="text-white">{Error || 'server error'}</span>
					</div>
				</div>,
				errorRoot
		  );
};

export default Error;
