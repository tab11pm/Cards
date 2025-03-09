import { cardStatus } from '../../consts/cardStatus';
import { ICard } from '../../types/card';
import { ISite } from '../../types/site';
import Btn from '../Button/Btn';
import './Card.scss';
import { NavigateFunction } from 'react-router-dom';
const Card = ({
	card,
	sites,
	navigate,
}: {
	card: ICard;
	sites: ISite[];
	navigate: NavigateFunction;
}) => {
	return (
		<>
			<tr className={`cards-item status-${cardStatus[card.status]}`}>
				<td className="cards_name">{card.name}</td>
				<td className="cards_name">{card.type}</td>
				<td className={`cards_name ${cardStatus[card.status]}`}>
					{cardStatus[card.status]}
				</td>
				<td
					className="cards_name"
					style={{
						textTransform: 'lowercase',
					}}
				>
					{sites.find((item) => item.id === card.siteId)?.url}
				</td>
				<td className="cards_name">
					<Btn
						type={cardStatus[card.status]}
						onClick={(e) =>
							navigate(
								`/${
									cardStatus[card.status] === 'draft' ? 'finalize' : 'results'
								}/${card.id}`
							)
						}
					/>
				</td>
			</tr>
		</>
	);
};

export default Card;
