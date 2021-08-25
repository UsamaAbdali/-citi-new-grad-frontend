import { HistoryModel } from './history';
import { Securities } from './Securities';

export class Account {
    
    id: number;
    amount: number;
    type: string;
    name: string;
    securitiesList: Securities[];
    historyList: HistoryModel[];
}
