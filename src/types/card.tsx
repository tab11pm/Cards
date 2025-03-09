import { ICardStatus } from './cardStatus';

export interface ICard {
	id: number;
	type: string;
	name: string;
	status: ICardStatus;
	siteId: number;
}
