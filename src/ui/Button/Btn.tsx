import './Btn.scss';

const Btn = ({ type, ...props }: { type: string }) => {
	return (
		<button
			className={`card__btn ${type === 'draft' ? 'btn-draft' : ''}`}
			{...props}
		>
			{type === 'draft' ? 'Finalize' : 'Results'}
		</button>
	);
};

export default Btn;
